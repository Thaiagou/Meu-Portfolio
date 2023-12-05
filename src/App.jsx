import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Account from "../src/assets/icons/account.svg";
import Location from "../src/assets/icons/location.svg";
import Age from "../src/assets/icons/age.svg";
import Tools from "../src/assets/icons/tools.svg";
import Javascript from "../src/assets/icons/javascript.svg";
import React from "../src/assets/icons/react.svg";
import Css from "../src/assets/icons/css.svg";
import Projeto from "../src/assets/images/FutebolApp.png";
import Sql from "../src/assets/icons/sql.svg";
import SonicGif from "../src/assets/images/sonic.gif"
import "./App.css";

function App() {
  return (
    <div>
      <header className="cabecalho">
        <span style={{ padding: "20px" }}>Thiago Ortiz</span>
        <span>
          <a href="https://github.com/Thaiagou" class="icon icon--github">
            <i class="ri-github-line"></i>
          </a>
        </span>
      </header>
      <div className="informacoes">
        <div className="perfil">
          <a href="https://github.com/Thaiagou" target="_blank">
            <img
              src="https://avatars.githubusercontent.com/u/110652953?v=4"
              className="picProfile"
            />
          </a>

          <span
            style={{
              display: "flex",
              width: "300px",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <img src={Account} style={{ width: "20px", height: "20px" }} />
            <h4>Nome: Thiago Ortiz da Silva</h4>
          </span>
          <span
            style={{
              display: "flex",
              width: "300px",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <img src={Location} style={{ width: "20px", height: "20px" }} />
            <h4>Estado: Santa Catarina</h4>
          </span>
          <span
            style={{
              display: "flex",
              width: "300px",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <img src={Age} style={{ width: "20px", height: "20px" }} />
            <h4>Idade: 18 anos</h4>
          </span>
          <span
            style={{
              display: "flex",
              width: "300px",
              gap: "10px",
              alignItems: "center",
              flexWrap:'wrap'
            }}
          >
            <img src={Tools} style={{ width: "20px", height: "20px" }} />
            <h4>Habilidades: </h4>
            <div style={{display:"flex"}}>
            <img src={Javascript} style={{ width: "50px", height: "50px" }} />
            <img src={React} style={{ width: "50px", height: "50px" }} />
            <img src={Css} style={{ width: "50px", height: "50px" }} />
            <img src={Sql} style={{ width: "50px", height: "50px" }} />
            </div>
          </span>
        </div>
        <div className="featureContent">
          <h2>Último Projeto Criado</h2>
          <h4>Futebol App</h4>
          <h5>Sistema feito com React e com um Banco de Dados criado por mim.</h5>
          <a href="https://futebol-app-gamma.vercel.app/" target="_blank">
            <div className="imageFeatureContent">
              <img src={Projeto} style={{ width: "753px", height: "399px" }} />
            </div>
          </a>
        </div>
      </div>
      <div style={{ margin: "20px" }}>
        <h2>Outros Projetos</h2>
      </div>

      <div style={{ padding: "20px", display: "flex", flexDirection: "row" }}>
        <div className="projetos">
          <h4>Rick and Morty App</h4>
          <h5>Sistema feito com React e usado uma Api do Rick and Morty.</h5>
          <div className="imagensProjetos">
            <a href="https://deploy-api-nine.vercel.app/" target="_blank">
              <div>
                <img
                  src="https://cdn.discordapp.com/attachments/760607702929637388/1163680121706782751/Opera_Instantaneo_2023-10-17_002811_deploy-api-nine.vercel.app.png?ex=65407491&is=652dff91&hm=cdd37383dd60590b8c8cf6f8965551feb40320c5b147d51c3118f3e5724479df&"
                  style={{ width: "257px", height: "170px" }}
                />
              </div>
            </a>
          </div>
        </div>
        <div className="projetos">
          <h4>Site CyberLife</h4>
          <h5>Site criado para um canal no Youtube de mesmo nome focado em traduções de jogos.</h5>
          <div className="imagensProjetos2">
            <a href="https://site-cyber.vercel.app/" target="_blank">
              <div>
                <img
                  src="https://www.dropbox.com/scl/fi/8vapzv2y6sqs591ig78ed/screencapture.png?rlkey=qwd5jimiqyrt5l8ki8fdxv2dl&raw=1"
                  style={{ width: "257px", height: "170px" }}
                />
              </div>
            </a>
          </div>
        </div>
        <div className="projetos">
          <h4>Tem mais...</h4>
            <h5>Ainda tem projetos feito com Expo e outros que não estão com Deploy.</h5>
            <img
                  src={SonicGif}
                  style={{ width: "120px", height: "170px" }}
                />
        </div>
      </div>
    </div>
  );
}

export default App;
