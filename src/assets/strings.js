import React from 'react'

const pt = {
  menu: 'Menu',
  nome: 'Alan Ramalho',
  resumo: '[ Desenvolvedor web ]',
  secondTitle: 'Serviços',
  thirdTitle: 'Principais trabalhos',
  forthTitle: 'Habilidades técnicas',
  contactTitle: 'Contato',
  serviceText: 'Sou um desenvolvedor web dedicado a estruturar, construir e implementar sites e web apps.  Criativo, obcecado com melhoramento pessoal e sempre disposto a aprender. Foco no desenvolvimento de aplicativos limpos, bonitos e intuitivos.',
  service1: 'Lading page',
  service1Text: 'Uma página como essa aqui, uma apresentação do seu negócio voltada para a conversão de clientes. ',
  service2: 'Sistema web',
  service2Text: 'Ferramenta de gerenciamento feita sob as especificações do cliente. Automatize seu negócio e acesse seu sistema de qualquer local, seja no escritório ou na rua, no seu computador ou no seu celular.',
  portfolio1Text: [
    <p key='1'>Sistema para clínica médica. Gerencia funções de controle de água, controle de coleta, controle de desinfecção, controle financeiro, gestão de pacientes, gestão de enfermagem, manutenção preventiva e corretiva, e gestão das máquinas. Acessível para enfermeiros, técnicos, cosultores e administradores da clínica.
    </p>,
    <p key='2'>O front foi feito em React e o back é uma REST API feita em Django.</p>
  ],
  portfolio2Text: [
    <p key='1'>Sistema para empresa de TI. Gerencia todos os treinamentos realizados pela empresa, sendo parte integral do programa de trainees e facilitando o compartilhamento de conhecimentos entre os membros.</p>,
    <p key='2'>O sistema foi feito em Django.</p>
  ],
  portfolio3Text: [
    <p key='1'>Sistema para empresa de consultoria. A plataforma permite empresas cadastrarem problemas ou desafios para serem respondidos por alunos cadastrados. Todas as respostas são avaliadas por analistas profissionais, e a melhor resposta, aprovada tanto pela empresa, como pelos analistas, ganha um prêmio.</p>,
    <p key='2'>O sistema foi feito em Django.</p>
  ],
  footer: 'Copyright © 2017 Alan Ramalho Herculano Azevedo.'
}

const chooseLanguage = () => {
  return pt
}

export default chooseLanguage()
