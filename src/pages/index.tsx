import type { NextPage } from "next";
import Safe from "../data/ui/components/feedback/safe/safe";
import PageTitle from "../data/ui/components/PageTitle/PageTitle";

const Home: NextPage = () => {
  return (
    <div>
      <Safe />
      <PageTitle
        title={"Conheça os profissonais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
    </div>
  );
};

export default Home;
