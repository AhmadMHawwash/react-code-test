const getFirstOfString = (subname: string) => subname[0] || "";

export const extractInitials = (name: string): string => {
  const subnames = name.split(" ");

  const subnamesInitials = subnames.map(getFirstOfString);

  return subnamesInitials.join("");
}