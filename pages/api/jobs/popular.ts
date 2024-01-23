import { NextApiRequest, NextApiResponse } from "next";

const jobsData = [
  {
    title: "Desenvolvedor Full Stack",
    description: "Desenvolva e mantenha aplicativos web inovadores.",
    salary: "$80,000 - $100,000/ano",
    location: "San Francisco, CA",
    company: {
      logoUrl:
        "https://api-jobs-finder2.vercel.app/imagens/icon-dropbox-96.png",
      name: "Dropbox",
      about: "Líder em armazenamento em nuvem.",
      reviews: "4.5/5 estrelas",
    },
    type: "Full Time",
  },
  {
    title: "Especialista em Marketing Online",
    description:
      "Execute campanhas de marketing digital e otimize a presença online.",
    salary: "$70,000 - $90,000/ano",
    location: "Menlo Park, CA",
    company: {
      logoUrl:
        "https://api-jobs-finder2.vercel.app/imagens/icon-facebook-96.png",
      name: "Facebook",
      about: "Maior plataforma de mídia social do mundo.",
      reviews: "4.7/5 estrelas",
    },
    type: "Full Time",
  },
  {
    title: "Engenheiro de Segurança de Dados",
    description:
      "Proteja dados sensíveis e desenvolva estratégias de segurança.",
    salary: "$90,000 - $110,000/ano",
    location: "Mountain View, CA",
    company: {
      logoUrl:
        "https://api-jobs-finder2.vercel.app/imagens/icon-instagram-96.png",
      name: "Instagram",
      about: "Empresa de tecnologia líder em busca e serviços online.",
      reviews: "4.8/5 estrelas",
    },
    type: "Full Time",
  },
  {
    title: "Designer UI/UX",
    description: "Crie experiências de usuário intuitivas e atraentes.",
    salary: "$75,000 - $95,000/ano",
    location: "Palo Alto, CA",
    company: {
      logoUrl:
        "https://api-jobs-finder2.vercel.app/imagens/icon-evernote-96.png",
      name: "Evernote",
      about: "Aplicativo de organização de notas e tarefas.",
      reviews: "4.6/5 estrelas",
    },
    type: "Full Time",
  },
  {
    title: "Analista de Dados Sênior",
    description:
      "Analise e interprete grandes conjuntos de dados para insights valiosos.",
    salary: "$85,000 - $105,000/ano",
    location: "Sunnyvale, CA",
    company: {
      logoUrl:
        "https://api-jobs-finder2.vercel.app/imagens/icon-linkedin-96.png",
      name: "LinkedIn",
      about: "Rede profissional e plataforma de busca de empregos.",
      reviews: "4.7/5 estrelas",
    },
    type: "Full Time",
  },
  {
    title: "Engenheiro de Software",
    description:
      "Desenvolva e mantenha sistemas escaláveis para uma experiência de usuário excepcional.",
    salary: "$85,000 - $110,000/ano",
    location: "Seattle, WA",
    company: {
      logoUrl: "[Link para o logo]",
      name: "Amazon",
      about: "Maior varejista online e provedor de serviços em nuvem.",
      reviews: "4.6/5 estrelas",
    },
    type: "Full Time",
  },
  {
    title: "Gerente de Produto",
    description:
      "Liderar o ciclo de vida do produto, desde a concepção até o lançamento.",
    salary: "$95,000 - $120,000/ano",
    location: "Cupertino, CA",
    company: {
      logoUrl: "[Link para o logo]",
      name: "Apple",
      about:
        "Empresa de tecnologia inovadora e fabricante de dispositivos eletrônicos.",
      reviews: "4.9/5 estrelas",
    },
    type: "Full Time",
  },
  {
    title: "Analista de Suporte Técnico",
    description:
      "Ofereça suporte técnico eficaz para resolver problemas de hardware e software.",
    salary: "$60,000 - $75,000/ano",
    location: "Austin, TX",
    company: {
      logoUrl: "[Link para o logo]",
      name: "Dell",
      about: "Empresa de tecnologia que oferece soluções de computação.",
      reviews: "4.4/5 estrelas",
    },
    type: "Full Time",
  },
  {
    title: "Cientista de Dados",
    description:
      "Conduza análises avançadas para extrair insights valiosos de conjuntos de dados complexos.",
    salary: "$90,000 - $115,000/ano",
    location: "New York, NY",
    company: {
      logoUrl: "[Link para o logo]",
      name: "IBM",
      about: "Empresa de tecnologia e consultoria global.",
      reviews: "4.5/5 estrelas",
    },
    type: "Full Time",
  },
  {
    title: "Especialista em Recursos Humanos",
    description:
      "Gerencie processos de recrutamento, seleção e desenvolvimento de talentos.",
    salary: "$70,000 - $90,000/ano",
    location: "Los Angeles, CA",
    company: {
      logoUrl: "[Link para o logo]",
      name: "Netflix",
      about: "Plataforma líder de streaming de entretenimento.",
      reviews: "4.7/5 estrelas",
    },
    type: "Full Time",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(jobsData);
}
