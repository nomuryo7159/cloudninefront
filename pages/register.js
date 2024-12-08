import { Box, Button, Container, TextField, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [entryTitle, setEntryTitle] = useState("");
  const [entryImage, setEntryImage] = useState("");
  const [entryDescription, setEntryDescription] = useState("");
  const [entryAchievement, setEntryAchievement] = useState("");
  const [strength, setStrength] = useState("");
  const [tags, setTags] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      customerName,
      email,
      companyName,
      entryTitle,
      entryImage,
      entryDescription,
      entryAchievement,
      strength,
      tags
    };

    try {
      const response = await axios.post('http://localhost:5000/register', data);
      console.log(response.data);
      // 必要に応じて、ユーザーに成功メッセージを表示します
    } catch (error) {
      console.error("登録中にエラーが発生しました:", error);
      // 必要に応じて、エラーメッセージをユーザーに表示します
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          会員登録
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            label="顧客名"
            variant="outlined"
            fullWidth
            margin="normal"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <TextField
            label="メールアドレス"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="会社名"
            variant="outlined"
            fullWidth
            margin="normal"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <TextField
            label="エントリータイトル"
            variant="outlined"
            fullWidth
            margin="normal"
            value={entryTitle}
            onChange={(e) => setEntryTitle(e.target.value)}
          />
          <TextField
            label="エントリー画像"
            variant="outlined"
            fullWidth
            margin="normal"
            value={entryImage}
            onChange={(e) => setEntryImage(e.target.value)}
          />
          <TextField
            label="エントリー説明"
            variant="outlined"
            fullWidth
            margin="normal"
            value={entryDescription}
            onChange={(e) => setEntryDescription(e.target.value)}
          />
          <TextField
            label="エントリー成果"
            variant="outlined"
            fullWidth
            margin="normal"
            value={entryAchievement}
            onChange={(e) => setEntryAchievement(e.target.value)}
          />
          <TextField
            label="強み"
            variant="outlined"
            fullWidth
            margin="normal"
            value={strength}
            onChange={(e) => setStrength(e.target.value)}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="tags-label">タグ</InputLabel>
            <Select
              labelId="tags-label"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              label="タグ"
            >
              <MenuItem value="外資系企業">外資系企業</MenuItem>
              <MenuItem value="上場企業">上場企業</MenuItem>
              <MenuItem value="自治体">自治体</MenuItem>
              <MenuItem value="大手企業">大手企業</MenuItem>
              <MenuItem value="中小企業">中小企業</MenuItem>
              <MenuItem value="スタートアップ">スタートアップ</MenuItem>
              <MenuItem value="その他">その他</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            登録
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
