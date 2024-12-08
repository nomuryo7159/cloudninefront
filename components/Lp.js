import '../styles/globals.css';
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import ellipse7 from "../public/ellipse-7.svg";
import rectangle29 from "../public/rectangle-29.png";
import rectangle30 from "../public/rectangle-30.png";
import Link from 'next/link';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#e4e4e4",
  borderRadius: "10px",
  padding: theme.spacing(1),
  fontWeight: "bold",
  fontSize: "1.25rem",
  color: "#4c4c4c",
  "&:hover": {
    backgroundColor: "#d4d4d4",
  },
}));

const Lp = () => {
  return (
    <Container maxWidth="lg" sx={{ bgcolor: "white", height: "100%" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <Box display="flex" alignItems="center">
          <Image src={ellipse7} alt="Ellipse" width={68} height={68} />
          <Typography variant="h4" fontWeight="bold" color="#28889c" ml={2}>
            Cloud Nine
          </Typography>
        </Box>
        <Box display="flex" gap={4}>
          <Typography variant="h6" color="#4c4c4c">
            Cloud Nine とは
          </Typography>
          <Typography variant="h6" color="#4c4c4c">
            使い方
          </Typography>
          <Typography variant="h6" color="#4c4c4c">
            協業事例
          </Typography>
          <Typography variant="h6" color="#4c4c4c">
            FAQ
          </Typography>
          <Typography variant="h6" color="#4c4c4c">
            運営企業
          </Typography>
        </Box>
        <Link href="/register">
          <StyledButton>さっそく無料登録</StyledButton>
        </Link>
      </Box>

      <Box textAlign="center" mt={4}>
        <Typography variant="h4" color="#4c4c4c">
          九州を濃やかに繋ぐ
          <br />
          ビジネスマッチングプラットフォーム
        </Typography>
        <Typography variant="h3" fontWeight="bold" color="#28889c">
          Cloud Nine
        </Typography>
        <Link href="/register">
          <StyledButton sx={{ mt: 2 }}>さっそく無料登録</StyledButton>
        </Link>
      </Box>

      <Box textAlign="center" mt={8}>
        <Typography variant="h4" fontWeight="bold" color="#e4e4e4">
          Cloud Nine とは？
        </Typography>
        <Box
          bgcolor="#f0f0f0"
          p={2}
          mt={2}
          display="flex"
          justifyContent="center"
        >
          <Typography variant="h5" color="black">
            Cloud
            Nineとは、会社規模の大小を問わず、九州に根付いた企業同士の共創を促し、
            <br />
            九州の経済を盛り上げるプラットフォームです。
            <br />
            登録企業の中から、AIが貴社に最適な協業パートナーを提案します。
          </Typography>
        </Box>
      </Box>

      <Box textAlign="center" mt={8}>
        <Typography variant="h4" fontWeight="bold" color="#e4e4e4">
          使い方
        </Typography>
        <Box
          bgcolor="#f0f0f0"
          p={2}
          mt={2}
          display="flex"
          justifyContent="center"
        >
          <Typography variant="h5" color="black">
            登録企業の一覧から会社情報や提携ニーズを検索できます。
            <br />
            貴社が新たに取り組みたい事業を選択します。
            <br />
            選択した事業にぴったりな協業先を、AIがレコメンドします。
          </Typography>
        </Box>
      </Box>

      <Box textAlign="center" mt={8}>
        <Typography variant="h4" fontWeight="bold" color="#e4e4e4">
          協業事例
        </Typography>
        <Box
          bgcolor="#f0f0f0"
          p={2}
          mt={2}
          display="flex"
          justifyContent="center"
        >
          <Image src={rectangle29} alt="Rectangle" width={1242} height={209} />
        </Box>
      </Box>

      <Box textAlign="center" mt={8}>
        <Typography variant="h4" fontWeight="bold" color="#e4e4e4">
          FAQ
        </Typography>
        <Box
          bgcolor="#f0f0f0"
          p={2}
          mt={2}
          display="flex"
          justifyContent="center"
        >
          <Typography variant="h5" color="black">
            Q： 協業経験がなくても簡単に使えますか？
            <br />
            A： はい、無料で登録してすぐに使えます。
            <br />
            <br />
            Q： AIがどうやってマッチングするのですか？
            <br />
            A：
            最新の機械学習モデルを使ってデータ分析し、精度の高いマッチング結果をレコメンドします。
            <br />
            <br />
            Q： 提案された企業について、あまりよく知らないのですが。
            <br />
            A： 気になる企業について、チャットボットで質問することができます。
          </Typography>
        </Box>
      </Box>

      <Box textAlign="center" mt={4}>
        <Link href="/register">
          <StyledButton>さっそく無料登録</StyledButton>
        </Link>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={8}
        mb={4}
      >
        <Typography variant="h5" color="black">
          Powered by
        </Typography>
        <Box ml={2}>
          <Image src={rectangle30} alt="Rectangle" width={525} height={313} />
        </Box>
      </Box>
    </Container>
  );
};

export default Lp;
