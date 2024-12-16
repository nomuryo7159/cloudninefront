// import OneCustomerInfoCard from "src/app/components/one_customer_info_card.jsx"
// import OneCustomerInfoCard from "@/app/components/one_customer_info_card";

// async function fetchCustomer(id) {
  // const res = await fetch(process.env.API_ENDPOINT + `/customers?customer_id=${id}`);
  // if (!res.ok) {
    // throw new Error('Failed to fetch customer');
  // }
  // return res.json();
// }

// export default async function ReadPage({ query }) {
  // const { id } = query;
  // const customerInfo = await fetchCustomer(id);

  // return (
    // <>
      // <div className="alert alert-success">
        // 更新しました
      // </div>
      // <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
        // <OneCustomerInfoCard {...customerInfo[0]} />
      // </div>
      // <button className="btn btn-outline btn-accent">
        // <a href="/customers">一覧に戻る</a>
      // </button>
    // </>
  // )
// }

import OneCustomerInfoCard from "@/app/components/one_customer_info_card";

async function fetchCustomer(id) {
  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/customers?customer_id=${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch customer');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching customer:', error);
    throw error;
  }
}

export default async function ReadPage({ params: { id } }) {
  try {
    const customerInfo = await fetchCustomer(id);
    if (!customerInfo || customerInfo.length === 0) {
      throw new Error('Customer not found');
    }

    return (
      <>
        <div className="alert alert-success">
          更新しました
        </div>
        <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
          <OneCustomerInfoCard {...customerInfo[0]} />
        </div>
        <a href="/customers" className="btn btn-outline btn-accent">
          一覧に戻る
        </a>
      </>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    return (
      <div className="alert alert-error">
        {error.message}
      </div>
    );
  }
}
