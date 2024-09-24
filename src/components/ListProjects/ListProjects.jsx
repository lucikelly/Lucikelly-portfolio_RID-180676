import Card from "../Card/Card";
import "./ListProjects.css";
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";


function ListProjects() {
  return (
    <div className="projects-title container" id="projetos">
      <h1>Projetos</h1>

      <div className="projects-grid container">
        <Card
          image={p1}
          titleProject="Plataforma de dashboard"
          descricao="A plataforma 
        de dashboard permite que usuários se registrem, façam login e logout, e interajam com os dados exibidos a partir de uma API conectada a um banco de dados. Os usuários podem alternar o tema da aplicação, visualizar dados, e gerenciar leads ao criar, deletar 
        ou modificar informações. Além disso, os usuários logados podem atualizar seus dados pessoais e até excluir suas contas da aplicação."
          git="https://github.com/lucikelly/sales-dashboard-Lucikelly"
          deploy="https://sales-dashboard-lucikelly-128l.vercel.app/"
        />
        <Card
          image={p2}
          titleProject="Projeto de Demonstração de Arquitetura"
          descricao="Página Desenvolvida com React e Vite. Funcionalidades de rotas, gerenciamento de idioma usando Context API, salvamento de preferências de idioma no local storage, responsividade para dispositivos móveis e componentes reutilizáveis. Conteúdo da página é adicionado de forma dinâmica através do consumo de uma API. O projeto tem um formulário que 
         permite enviar e-mails utilizando o Web3Forms"
          git="https://github.com/lucikelly/projeto-ArqNet"
          deploy="https://projeto-arqnet-lucikelly.vercel.app/"
        />

        <Card
          image={p4}
          titleProject="Strong Warrior"
          descricao="Um Jogo Desenvolvido em Godot. Strong Warrior é um jogo emocionante com interfaces gráficas estilizadas, suporte para teclas de PC e controle de console.
        O objetivo principal de Strong Warrior é derrotar o máximo de inimigos possível e sobreviver pelo maior tempo que conseguir. Utilize o ritual automático do personagem principal para causar dano nos inimigos e ataques 
        com a espada para se defender."
          git="https://github.com/lucikelly/Strong-Warrior"
          deploy="https://lucikelly-santos.itch.io/strong-warrior"
        />
        <Card
          image={p3}
          titleProject="Aplicação de tempo e localização"
          descricao="Uma aplicação para consultar o tempo com base em coordenadas de latitude e longitude é um sistema que permite 
          aos usuários obter previsões meteorológicas em qualquer local do mundo, 
          informando essas coordenadas geográficas. Aplicação também da informações como cidade/bairro/logradoro a partir do CEP."
          git="https://github.com/lucikelly/projeto-ArqNet"
          deploy="https://app-temp-e-local.vercel.app/"
        />
      </div>
    </div>
  );
}

export default ListProjects;
