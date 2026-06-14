/** Préfixe un asset de public/ avec la base Vite (déploiement en sous-dossier). */
export const asset = (path: string): string => import.meta.env.BASE_URL + path
