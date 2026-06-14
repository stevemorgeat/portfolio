export interface Passion {
  icon: string
  title: string
  text: string
  tags: string[]
}

export const passions: Passion[] = [
  {
    icon: '🎮',
    title: 'Jeux vidéo & rétro gaming',
    text: "Geek des années 90 qui a grandi manette en main — vieux, mais jeune dans la tête. Le rétro à fond, la baston (KOF, Street Fighter, toute la panoplie Capcom/SNK), Final Fantasy (mention spéciale au VII), et aujourd'hui Warzone, FIFA, Arc Raiders. Toutes les consoles y passent.",
    tags: ['Rétro gaming', 'Baston (KOF / SF)', 'Final Fantasy VII', 'Warzone / FIFA / Arc Raiders'],
  },
  {
    icon: '🏠',
    title: 'Domotique',
    text: "Maison full équipée autour de Home Assistant : assistants vocaux / NLP et une vraie collection de protocoles — dont des marques FR comme Netatmo et Legrand. Ça rejoignait d'ailleurs mon job chez Otodo.",
    tags: ['Home Assistant', 'Vocal / NLP', 'Netatmo / Legrand', 'Zigbee / Z-Wave'],
  },
  {
    icon: '🖨️',
    title: 'Impression 3D',
    text: "Imprimante 3D à la maison : du modèle à l'objet. Bonus prévu sur ce site — un viewer 3D d'un de mes modèles.",
    tags: ['Modélisation', 'Print', 'Maker'],
  },
  {
    icon: '⚽',
    title: 'Sport',
    text: 'Foot, basket, piscine — et supporter dans l\'âme.',
    tags: ['Foot', 'Basket', 'Piscine'],
  },
  {
    icon: '✈️',
    title: 'Voyages',
    text: "Le Japon et l'Europe, surtout — d'où le projet « Voyage Japon » dans mes réalisations.",
    tags: ['Japon', 'Europe'],
  },
]
