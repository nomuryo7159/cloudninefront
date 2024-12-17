"use server";
import { revalidatePath } from 'next/cache';

const companiesList = async () => {

    const res = await fetch(`https://tech0-gen-8-step3-app-py-8.azurewebsites.net/companies`, {
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
