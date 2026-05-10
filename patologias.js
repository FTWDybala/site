
const patologias = {
  entorse: {
    nome: "Entorse",
    doenca: `
A entorse é uma lesão dos ligamentos que estabilizam uma articulação. 
Ocorre quando a articulação é forçada além do seu limite normal, causando estiramento ou rotura parcial/total dos ligamentos. 
É muito comum no tornozelo, joelho e punho.
    `,
    sintomas: `
- Dor súbita no momento da lesão
- Inchaço rápido (edema)
- Hematoma após algumas horas
- Dificuldade em apoiar ou mover a articulação
- Sensação de instabilidade
- Em casos graves, incapacidade total de carga
    `,
    fisiopatologia: `
O movimento excessivo provoca estiramento ou rotura das fibras ligamentares. 
Isso desencadeia inflamação local, aumento de líquido sinovial, hemorragia dos pequenos vasos e perda temporária de estabilidade articular. 
A proprioceção também fica comprometida, aumentando o risco de nova lesão.
    `,
    tratamento: `
- Fase aguda (48–72h): gelo, compressão, elevação, repouso relativo
- Fase subaguda: mobilidade suave e exercícios de amplitude
- Reabilitação: fortalecimento, treino proprioceptivo e correção biomecânica
- Casos graves: imobilização prolongada ou cirurgia
    `,
    recuperacao: `
Grau I: 1–3 semanas  
Grau II: 3–6 semanas  
Grau III: 2–3 meses ou mais
    `
  },

  distensaoMuscular: {
    nome: "Distensão Muscular",
    doenca: `
Lesão das fibras musculares causada por alongamento excessivo ou contração explosiva. 
É comum em músculos como isquiotibiais, gémeos e quadríceps, especialmente em atletas.
    `,
    sintomas: `
- Dor aguda tipo “puxão”
- Perda de força
- Rigidez muscular
- Hematoma em lesões moderadas/graves
- Dificuldade em continuar a atividade
    `,
    fisiopatologia: `
O músculo é submetido a uma carga superior à sua capacidade, provocando micro ou macro-roturas das fibras musculares e do tecido conjuntivo. 
Segue-se inflamação, hemorragia local e espasmo muscular reflexo.
    `,
    tratamento: `
- Repouso relativo
- Gelo nas primeiras 48–72h
- Compressão e elevação
- Alongamentos progressivos
- Fortalecimento excêntrico
- Em roturas extensas: possível intervenção cirúrgica
    `,
    recuperacao: `
Leve: 1–2 semanas  
Moderada: 3–6 semanas  
Grave: 2–3 meses ou mais
    `
  },

  concussao: {
    nome: "Concussão",
    doenca: `
Lesão cerebral traumática ligeira causada por impacto direto na cabeça ou aceleração/desaceleração brusca. 
Não costuma apresentar alterações estruturais visíveis em exames de imagem.
    `,
    sintomas: `
- Dor de cabeça
- Tonturas, náuseas
- Confusão e lentificação mental
- Sensibilidade à luz e ao som
- Amnésia do evento
- Sonolência
- Pode haver perda breve de consciência
    `,
    fisiopatologia: `
O impacto provoca alterações iónicas e metabólicas nos neurónios, libertação excessiva de neurotransmissores e redução temporária do metabolismo cerebral. 
Isso gera disfunção neurológica transitória sem lesão estrutural evidente.
    `,
    tratamento: `
- Retirada imediata da atividade de risco
- Repouso físico e cognitivo inicial
- Retorno gradual às atividades
- Monitorização de sintomas
- Evitar novo impacto durante a recuperação
    `,
    recuperacao: `
A maioria recupera em dias a poucas semanas.  
Alguns casos podem evoluir para síndrome pós-concussão, com sintomas persistentes por meses.
    `
  },

  fraturaStress: {
    nome: "Fratura de Stress",
    doenca: `
Fratura incompleta causada por sobrecarga repetitiva sobre o osso. 
É comum em atletas e militares, afetando tíbia, metatarsos e fíbula.
    `,
    sintomas: `
- Dor localizada que piora com atividade e melhora com repouso
- Sensibilidade à palpação
- Edema discreto
- Dor progressiva ao longo dos dias/semanas
    `,
    fisiopatologia: `
Microtraumas repetidos excedem a capacidade de remodelação óssea. 
O osso acumula microfissuras que podem evoluir para fratura completa se a carga continuar.
    `,
    tratamento: `
- Redução ou suspensão da carga
- Possível imobilização
- Correção de fatores de risco (calçado, técnica, nutrição)
- Em alguns casos, cirurgia
    `,
    recuperacao: `
Geralmente 6–8 semanas ou mais, dependendo do osso e da adesão ao repouso.
    `
  },

  bursite: {
    nome: "Bursite",
    doenca: `
Inflamação de uma bursa — pequena bolsa cheia de líquido que reduz o atrito entre tendões, ossos e pele. 
Comum no ombro, cotovelo, quadril e joelho.
    `,
    sintomas: `
- Dor localizada
- Inchaço e calor local
- Sensibilidade ao toque
- Dor ao movimento ou pressão
- Em bursite séptica: febre e vermelhidão intensa
    `,
    fisiopatologia: `
A bursa inflama devido a irritação mecânica repetida, trauma direto, doenças inflamatórias ou infeção. 
A parede da bursa engrossa e acumula líquido, causando dor e limitação funcional.
    `,
    tratamento: `
- Repouso da região
- Gelo
- Anti-inflamatórios quando indicados
- Fisioterapia
- Infiltração com corticoide em casos selecionados
- Bursite séptica: antibióticos e, às vezes, drenagem
    `,
    recuperacao: `
Dias a semanas na maioria dos casos.  
Pode tornar-se crónica se o fator mecânico persistir.
    `
  },

  tendinite: {
    nome: "Tendinite / Tendinopatia",
    doenca: `
Inflamação ou degeneração de um tendão causada por sobreuso, sobrecarga repetida ou alterações biomecânicas. 
Comum no ombro, cotovelo, joelho e tornozelo.
    `,
    sintomas: `
- Dor ao longo do tendão
- Piora com esforço e melhora com repouso
- Rigidez matinal
- Sensibilidade à palpação
- Em alguns casos, crepitação
    `,
    fisiopatologia: `
Microlesões repetidas levam à degeneração das fibras de colagénio, neovascularização e inflamação local. 
Com o tempo, pode evoluir para rotura parcial ou total.
    `,
    tratamento: `
- Redução da carga
- Correção de técnica e biomecânica
- Gelo após esforço
- Exercícios excêntricos
- Outras terapias em casos persistentes
- Cirurgia em situações refratárias
    `,
    recuperacao: `
Semanas a meses, dependendo da cronicidade e da adesão ao programa de reabilitação.
    `
  }
};
