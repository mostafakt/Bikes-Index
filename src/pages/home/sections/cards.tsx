
import React, { useState } from "react";
import { ActionsContainer, BikeCard, CardContainer, ContentContainer } from "./styles";

import Input from "../../../components/textInput";

const CardsSection = () => {
  const [query, setQuery] = useState('')
   

  const bikes ={}as any;
  return (
    <ContentContainer>
      <ActionsContainer>
        <Input label="search" onChange={setQuery} value={query} />
      </ActionsContainer>
      {bikes?.isLoading ? <div>
        ....Loading
      </div> : <CardContainer>
        {bikes?.data?.bikes && bikes?.data?.bikes?.length > 0 ? bikes?.data?.bikes?.map(t => {
          return <BikeCard>
            {t.title}
          </BikeCard>
        }) : <div>
          .... empty List
        </div>
        }

      </CardContainer>}

    </ContentContainer>
  );
};

export default CardsSection;
