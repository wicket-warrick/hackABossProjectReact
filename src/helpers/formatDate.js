export const dateFormater = (date) => {
  const arrayFormatedDate = date.toISOString().split("T");
  const formatedCurrentDate = `${arrayFormatedDate[0]}`;
  return formatedCurrentDate;
};
export const stringDateFormater = (stringDate, toPublic=false) => {
  if (toPublic){
    const dateToFormated=stringDate.split("T")
    const formatedToPublicDate=dateToFormated[0].split("-")
    return `${formatedToPublicDate[2]}/${formatedToPublicDate[1]}/${formatedToPublicDate[0]}`;
 
  }else{

    return stringDate.split("T")[0];
  }
};
