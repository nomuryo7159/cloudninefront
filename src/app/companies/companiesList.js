"use server";
import { revalidatePath } from 'next/cache';

const companiesList = async () => {

    const res = await fetch(process.env.API_ENDPOINT+`/companies`, {
        method: 'GET'
    });
    const data = await res.json(); // ここでawaitすることでJSONオブジェクトを取得
    console.log("companylistです");
    console.log(data); // dataがレスポンスのJSON
    return data;
    // if (!res.ok) {
    //     throw new Error('Failed to create customer');
    // }

    // revalidatePath(`/register/user`);
}

export default companiesList;
