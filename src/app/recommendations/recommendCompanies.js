"use server";
import { revalidatePath } from 'next/cache';

const recommendCompanies = async () => {
    const customer_id = 3;

    const body_msg = JSON.stringify({
        customer_id: customer_id,
    })
    console.log(body_msg);

    const res = await fetch(process.env.API_ENDPOINT+`/recommend/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body_msg,
    });
    const data = await res.json(); // ここでawaitすることでJSONオブジェクトを取得
    console.log(data); // dataがレスポンスのJSON
    return data;
    // if (!res.ok) {
    //     throw new Error('Failed to create customer');
    // }

    // revalidatePath(`/register/user`);
}

export default recommendCompanies;
