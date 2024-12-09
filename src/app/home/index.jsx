import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import ellipse7 from "./ellipse-7.svg";
import rectangle29 from "./rectangle-29.png";
import rectangle30 from "./rectangle-30.png";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#mq-5j-9y",
  borderRadius: "10px",
  padding: theme.spacing(1),
  fontWeight: "bold",
  fontSize: "1.25rem",
  fontFamily: "Arial-Bold, Helvetica",
  color: "#x-6s-CQCU",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Arial-Bold, Helvetica",
  fontWeight: "bold",
  fontSize: "2rem",
  color: "#mq-5j-9y",
  textAlign: "center",
}));

export default function CreateLp() {
  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: "white", height: "2070px" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <Box display="flex" alignItems="center">
          <img src={ellipse7} alt="Ellipse" width={68} height={68} />
          <Typography variant="h4" fontWeight="bold" ml={2}>
            Cloud Nine
          </Typography>
        </Box>
        <Box display="flex" gap={2}>
          <Typography variant="h6">Cloud Nine とは</Typography>
          <Typography variant="h6">使い方</Typography>
          <Typography variant="h6">協業事例</Typography>
          <Typography variant="h6">FAQ</Typography>
          <Typography variant="h6">運営企業</Typography>
        </Box>
        <StyledButton>さっそく無料登録</StyledButton>
      </Box>

      <Box textAlign="center" mt={5}>
        <Typography variant="h4" color="#4c4c4c">
          九州を濃やかに繋ぐ
          <br />
          ビジネスマッチングプラットフォーム
          <br />
        </Typography>
        <Typography variant="h3" color="#28889c" fontWeight="bold">
          Cloud Nine
        </Typography>
        <StyledButton sx={{ mt: 2 }}>さっそく無料登録</StyledButton>
      </Box>

      <StyledTypography mt={10}>Cloud Nine とは？</StyledTypography>
      <Box textAlign="center" mt={2} px={5}>
        <Typography variant="h5">
          Cloud
          Nineとは、会社規模の大小を問わず、九州に根付いた企業同士の共創を促し、九州の経済を盛り上げるプラットフォームです。
          <br />
          登録企業の中から、AIが貴社に最適な協業パートナーを提案します。
        </Typography>
      </Box>

      <StyledTypography mt={10}>使い方</StyledTypography>
      <Box textAlign="center" mt={2} px={5}>
        <Typography variant="h5">
          登録企業の一覧から会社情報や提携ニーズを検索できます。
          <br />
          貴社が新たに取り組みたい事業を選択します。
          <br />
          選択した事業にぴったりな協業先を、AIがレコメンドします。
        </Typography>
      </Box>

      <StyledTypography mt={10}>協業事例</StyledTypography>
      <Box textAlign="center" mt={2} px={5}>
        <img src={rectangle29} alt="Rectangle" width="100%" />
      </Box>

      <StyledTypography mt={10}>FAQ</StyledTypography>
      <Box textAlign="center" mt={2} px={5}>
        <Typography variant="h5">
          Q：　協業経験がなくても簡単に使えますか？
          <br />
          A：　はい、無料で登録してすぐに使えます。
          <br />
          <br />
          Q：　 AIがどうやってマッチングするのですか？
          <br />
          A：　最新の機械学習モデルを使ってデータ分析し、精度の高いマッチング結果をレコメンドします。
          <br />
          <br />
          Q：　提案された企業について、あまりよく知らないのですが。
          <br />
          A：　気になる企業について、チャットボットで質問することができます。
        </Typography>
      </Box>

      <Box textAlign="center" mt={2}>
        <StyledButton>さっそく無料登録</StyledButton>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
        <img src={rectangle30} alt="Rectangle" width={525} height={313} />
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
        <Typography variant="h5" fontWeight="bold">
          Powered by
        </Typography>
        <Box
          ml={2}
          width={140}
          height={48}
          sx={{ backgroundImage: `url(/image-7.png)`, backgroundSize: "cover" }}
        />
      </Box>
    </Container>
  );
};


