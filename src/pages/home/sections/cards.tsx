/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import {
  ActionsContainer,
  BikeCard,
  CardContainer,
  ContentContainer,
  FirstContainer,
  ImageContainer,
  StoleData,
  TextContainer,
} from "./styles";

import Input from "../../../components/textInput";
import { useGetBikesQuery } from "src/data/bikes";
import { DatePicker, Empty, Pagination, Spin } from "antd";
import { InputContainer } from "src/components/textInput/styles";
import Image from "src/components/image";
const emptyImageLink = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'
const { RangePicker } = DatePicker;
const CardsSection = () => {
  const [query, setQuery] = useState("");
  const [pagination, setPagination] = useState({ page: 1, perPage: 10 });
  const [fromDate, setFromDate] = useState<string | undefined>();
  const [toDate, setToDate] = useState<string | undefined>();
  //@ts-ignore
  const bikes = useGetBikesQuery({
    page: pagination.page,
    perPage: pagination.perPage,
    query: query,
  });

  // Convert fromDate and toDate to Date objects if they exist
  const from = fromDate ? new Date(fromDate) : null;
  const to = toDate ? new Date(toDate) : null;

  // Filter bikes based on date_stolen being within the range
  const filteredBikes = bikes?.data?.bikes?.filter((bike) => {
    const dateStolen = new Date(bike.date_stolen * 1000);
    return !from || !to || (dateStolen >= from && dateStolen <= to);
  });
  function formatDateToYYYYMMDD(dateString:number) {
    return  new Date(dateString * 1000).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  }


  return (
    <ContentContainer>
      <ActionsContainer>
        <Input label="search" onChange={setQuery} value={query} />
        <InputContainer>
          <label>Date</label>
          <RangePicker
            popupStyle={{ direction: "ltr" }}
            style={{ height: "2.9375rem" }}
            allowClear={true}
            onReset={() => { }}
            onChange={(val) => {
              // setValue("mindate", val ? val[0]?.format("YYYY-MM-DD") : undefined);
              // setValue("maxdate", val ? val[1]?.format("YYYY-MM-DD") : undefined);
              setFromDate(val ? val[0]?.format("YYYY-MM-DD") : "");
              setToDate(val ? val[1]?.format("YYYY-MM-DD") : "");
            }}
          />
        </InputContainer>
      </ActionsContainer>
      {bikes?.isFetching ? (
        <div className="loading">
          <Spin size="large" />
        </div>
      ) : (
        <CardContainer>
          {filteredBikes && filteredBikes.length > 0 ? (
            filteredBikes.map((bike) => <BikeCard>

              <FirstContainer>
                <ImageContainer>
                  <Image src={bike.thumb ?? emptyImageLink} preview />

                </ImageContainer>
                <TextContainer>
                  <div className="title">{bike.title}</div>
                  <div className="description">{bike.description}</div>

                </TextContainer>
              </FirstContainer>
              <StoleData>
                <div className="stoleDate">Stole Date :

                  {formatDateToYYYYMMDD(bike?.date_stolen)}

                </div>
                <div className="reportDate">Report Date : {bike.year}</div>
                <div className="location">Location : {bike.stolen_location}</div>

              </StoleData>
            </BikeCard>)
          ) : (
            <Empty />
          )}
        </CardContainer>
      )}

      <Pagination
        total={filteredBikes?.length ?? 0}
        current={pagination.page}
        showSizeChanger
        showQuickJumper
        pageSize={pagination.perPage}
        onChange={(page: number, pageSize) => {
          const data = { page, perPage: pageSize };
          setPagination(data);
        }}
      />
    </ContentContainer>
  );
};

export default CardsSection;
