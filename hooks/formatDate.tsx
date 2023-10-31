const formatDate = (dateStr: string): string => {
  const formattedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(dateStr))
  return formattedDate
}
export default formatDate
