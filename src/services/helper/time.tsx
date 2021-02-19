export const __getTicksByUnixTimestampMili = (unix: number) => {
    return ((unix) * 10000) + 621355968000000000;
}