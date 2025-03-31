import GrowthIcon from "@/src/assets/icons/growth.svg";
import ResearchIcon from "@/src/assets/icons/research.svg";
import ProcessIcon from "@/src/assets/icons/process.svg";
import RepairIcon from "@/src/assets/icons/repair.svg";
import MegaphoneIcon from "@/src/assets/icons/megaphone.svg";
import SearchIcon from "@/public/img/search.svg";
import CloudIcon from "@/public/img/cloud.svg";
import InstagramIcon from "@/src/assets/icons/instagram.svg";

export const scopes = [
  {
    icon: {
      title: "SEO-продвижение",
      icon: <GrowthIcon />,
    },
    text: "Прокси-серверы играют важную роль в различных аспектах SEO (Search Engine Optimization), которые направлены на улучшение видимости и рейтинга веб-сайтов в поисковых системах.",
  },
  {
    icon: {
      title: "Лидогенерация",
      icon: <ResearchIcon />,
    },
    text: "Здесь прокси-серверы помогают собирать информацию о существующих или потенциальных клиентах. Предложения от компаний в этой области включают услуги по скрейпингу и парсингу.",
  },
  {
    icon: {
      title: "Арбитраж трафика",
      icon: <ProcessIcon />,
    },
    text: "Прокси-серверы позволяют распределить трафик между несколькими IP-адресами или регионами. Это улучшает производительность, особенно при работе с большим объемом трафика.",
  },
  {
    icon: {
      title: "Парсинг данных",
      icon: <RepairIcon />,
    },
    text: "Прокси-серверы широко применяются в парсинге данных для оптимизации процесса и обеспечения стабильности сбора данных. ",
  },
  {
    icon: {
      title: "Маркетинг",
      icon: <MegaphoneIcon />,
    },
    text: "Прокси-серверы также имеют широкое применение в маркетинге. Вот некоторые способы использования прокси-серверов этой области:",
    ul: [
      "- Исследование рынка и конкурентов",
      "- Тестирование сайтов и приложений",
    ],
    img: <SearchIcon />,
  },
  {
    icon: {
      title: "Социальные сети",
      icon: <InstagramIcon />,
    },
    text: "SMM-специалисты могут использовать прокси для управления несколькими аккаунтами с разных IP-адресов, не вызывая подозрений у социальных сетей. А если аккаунт пользователя социальной сети заблокирован или ограничен из-за чрезмерной активности, прокси могут использоваться для смены IP-адреса и восстановления доступа.",
    img: <CloudIcon />,
  },
];
