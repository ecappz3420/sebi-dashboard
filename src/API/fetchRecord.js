const fetchRecord = async (id)=>{
    const config = {
        appName: "cyber-security",
        reportName: "All_Customers",
        id: id
    }
    try {
        const response = await ZOHO.CREATOR.API.getRecordById(config);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchRecord;