import { Button, Center, TextInput } from "@mantine/core";

const Login = () => {
  return (
    <div
      style={{
        height: "60vh",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Center>
          <h1>1 bước nữa để hoàn thành đăng ký</h1>
        </Center>
        <TextInput defaultValue={"Minh Tam"} />

        <Button w={"100%"} style={{ marginTop: "15px" }}>
          Hoàn Thành
        </Button>
      </div>
    </div>
  );
};

export default Login;
