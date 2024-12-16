import React from 'react';
import { Lucide } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      <header className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
            <img src="/cloud.jpg" alt="Cloud" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-custom-teal ml-4">Cloud Nine</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#about-section" className="text-lg text-gray-700">Cloud Nine とは</a>
          <a href="#usage-section" className="text-lg text-gray-700">使い方</a>
          <a href="#examples-section" className="text-lg text-gray-700">協業事例</a>
          <a href="#faq-section" className="text-lg text-gray-700">FAQ</a>
          <a href="#company-section" className="text-lg text-gray-700">運営企業</a>
        </nav>
        <a href="http://localhost:3000/register" className="bg-teal-700 text-white px-4 py-2 rounded-lg">さっそく無料登録</a>
      </header>

      <main className="px-8 py-16">
        <section className="flex justify-center items-center mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">九州を濃やかに繋ぐ<br />ビジネスマッチングプラットフォーム</h2>
            <h2 className="text-5xl font-bold text-custom-teal mb-4">Cloud Nine</h2>
          </div>
          <div className="ml-4">
            <img src="/rectangle-30.png" alt="Rectangle" className="w-full h-full object-cover" />
          </div>
        </section>

        <h3 id="about-section" className="text-3xl font-bold text-custom-teal text-center mb-4">Cloud Nine とは？</h3>
        <section id="about" className="bg-custom-bg p-8 rounded-lg mb-16">
          <p className="text-lg text-center text-gray-700">
            Cloud Nineとは、会社規模の大小を問わず、九州に根付いた企業同士の共創を促し、<br />九州の経済を盛り上げるプラットフォームです。<br />
            登録企業の中から、AIが貴社に最適な協業パートナーを提案します。
          </p>
        </section>

        <h3 id="usage-section" className="text-3xl font-bold text-custom-teal text-center mb-4">使い方</h3>
        <section id="usage" className="bg-custom-bg p-8 rounded-lg mb-16">
          <p className="text-lg text-gray-700">
            1.登録企業の一覧から会社情報や提携ニーズを検索できます。<br />
            2.貴社が新たに取り組みたい事業を選択します。<br />
            3.選択した事業にぴったりな協業先を、AIがレコメンドします。<br />
          </p>
        </section>

        <h3 id="examples-section" className="text-3xl font-bold text-custom-teal text-center mb-4">協業事例</h3>
        <section id="examples" className="bg-custom-bg p-8 rounded-lg mb-16">
          <div className="w-full">
            <img src="/rectangle-29.png" alt="Example" className="w-full h-full object-cover" />
          </div>
        </section>

        <h3 id="faq-section" className="text-3xl font-bold text-custom-teal text-center mb-4">FAQ</h3>
        <section id="faq" className="bg-custom-bg p-8 rounded-lg mb-16">
          <p className="text-lg text-gray-700">
            Q：　協業経験がなくても簡単に使えますか？<br />
            A：　はい、無料で登録してすぐに使えます。<br /><br />
            Q：　 AIがどうやってマッチングするのですか？<br />
            A：　最新の機械学習モデルを使ってデータ分析し、精度の高いマッチング結果をレコメンドします。<br /><br />
            Q：　提案された企業について、あまりよく知らないのですが。<br />
            A：　気になる企業について、チャットボットで質問することができます。
          </p>
        </section>
      </main>

      <footer className="flex justify-end items-center p-4 bg-gray-100">
        <p className="text-lg mr-2">Powered by</p>
        <img src="/logo.jpg" alt="Logo" className="w-24 h-auto ml-2" />
      </footer>
    </div>
  );
};

export default LandingPage;
