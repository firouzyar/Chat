
// import data from "../mockJson/message#5532.json"
export const getMessagesData = async (id) => {
    const filePath = "/public/mockJson/message#5532.json";
    console.log(filePath)
    const Data = await import(`${filePath}`);
    console.log(Data)
    return "Data"
}