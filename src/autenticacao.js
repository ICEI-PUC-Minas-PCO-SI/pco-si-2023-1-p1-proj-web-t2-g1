const fs = Require('fs');
const sgMail = Require('@sendgrid/mail');

// Ler o arquivo JSON
const rawdata = fs.readFileSync('email.json');
const emailData = JSON.parse(rawdata);

// Configurar a chave de API
sgMail.setApiKey(emailData.apiKey);

// Definir os detalhes do e-mail
const mensagem= {
  From: emailData.from,
  to: emailData.to,
  subject: emailData.subject,
  text: emailData.body
};

// Enviar o e-mail
sgMail.send(mensagem)
  .then(() => console.log('E-mail enviado com sucesso'))
  .catch((error) => console.error('Erro ao enviar o e-mail:', error));