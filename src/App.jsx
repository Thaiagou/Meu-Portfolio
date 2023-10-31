import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Account from '../src/assets/icons/account.svg'
import Location from '../src/assets/icons/location.svg'
import Age from '../src/assets/icons/age.svg'
import Tools from '../src/assets/icons/tools.svg'
import Javascript from '../src/assets/icons/javascript.svg'
import React from '../src/assets/icons/react.svg'
import Css from '../src/assets/icons/css.svg'
import Projeto from '../src/assets/images/FutebolApp.png'
import './App.css'

function App() {


  return (
    <div>
      <header className='cabecalho'><span style={{ padding: '20px' }}>Thiago Ortiz</span>
        <span>
          <a href="https://github.com/Thaiagou" class="icon icon--github">
            <i class="ri-github-line"></i>
          </a>
        </span></header>
      <div className='informacoes'>
        <div className='perfil'>
          <a href="https://github.com/Thaiagou" target="_blank"><img src='https://avatars.githubusercontent.com/u/110652953?v=4' className='picProfile' /></a>

          <span style={{ display: 'flex', width: '300px', gap: '10px', alignItems: 'center' }}><img src={Account} style={{ width: '20px', height: '20px' }} /><h4>Nome: Thiago Ortiz da Silva</h4></span>
          <span style={{ display: 'flex', width: '300px', gap: '10px', alignItems: 'center' }}><img src={Location} style={{ width: '20px', height: '20px' }} /><h4>Estado: Santa Catarina</h4></span>
          <span style={{ display: 'flex', width: '300px', gap: '10px', alignItems: 'center' }}><img src={Age} style={{ width: '20px', height: '20px' }} /><h4>Idade: 18 anos</h4></span>
          <span style={{ display: 'flex', width: '300px', gap: '10px', alignItems: 'center' }}><img src={Tools} style={{ width: '20px', height: '20px' }} /><h4>Habilidades:  </h4><img src={Javascript} style={{ width: '50px', height: '50px' }} /><img src={React} style={{ width: '50px', height: '50px' }} /><img src={Css} style={{ width: '50px', height: '50px' }} /></span>
        </div>
        <div className='featureContent'>
          <h2>Ultimo Projeto Criado</h2>
          <h4>Futebol App</h4>
          <a href='https://github.com/Thaiagou/Futebol-App' target='_blank'><div className='imageFeatureContent'><img src={Projeto} style={{ width: '753px', height: '399px' }} /></div></a>
        </div>

      </div>
      <div style={{margin:'20px'}}><h2>Outros Projetos</h2></div>
      
      <div style={{padding:'20px',display:'flex',flexDirection:'row'}}>
        
        <div className='projetos'>
          <h4>Rick and Morty App</h4>
          <div className='imagensProjetos'>
            <a href='https://github.com/Thaiagou/Rick-and-Morty-Api' target='_blank'><div ><img src='https://cdn.discordapp.com/attachments/760607702929637388/1163680121706782751/Opera_Instantaneo_2023-10-17_002811_deploy-api-nine.vercel.app.png?ex=65407491&is=652dff91&hm=cdd37383dd60590b8c8cf6f8965551feb40320c5b147d51c3118f3e5724479df&' style={{ width: '257px', height: '136px' }} /></div></a>
          </div>
        </div>
        <div className='projetos'>
          <h4>Site CyberLife</h4>
          <div className='imagensProjetos2'>
            <a href='https://github.com/Thaiagou/SiteCyber' target='_blank'><div ><img src='https://cdn.discordapp.com/attachments/760607702929637388/1121941767995019386/sitecyber.html.png' style={{ width: '204px', height: '171px' }} /></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
