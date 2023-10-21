import {
  Center,
  Flex,
  Paper,
  Text,
  Image,
  Button,
  TextInput,
} from "@mantine/core";
import Teacher from "./assets/Young_businesswoman_finger_point_up_cartoon_illustration.jpg";
import Student from "./assets/9019105.jpg";
// import Logo from "./assets/CHĂM CHỈ.svg";
import Each1 from "./assets/image_part_001.jpg";
import Each2 from "./assets/image_part_002.jpg";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./Layout.css";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [hover, setHover] = useState<{ left: boolean; right: boolean }>({
    left: false,
    right: false,
  });

  const [indicate, setIndicate] = useState<"left" | "right" | "">("left");

  const navigate = useNavigate();
  const handleMouseMove = () => {
    if (indicate === "left") {
      setHover((prev) => ({ ...prev, left: true, right: false }));
    } else {
      setHover((prev) => ({ ...prev, left: false, right: true }));
    }
  };

  return (
    <>
      <Center style={{ marginTop: "35px" }}>
        <Logo
          customColor={[
            "#FF6B6B",
            "#FF6B6B",
            "#FF6B6B",
            "#FF6B6B",
            "#FD7E14",
            "#FD7E14",
            "#FD7E14",
          ]}
          animate={true}
        />
      </Center>

      <div
        style={{
          height: "80vh",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Center>
            <Flex>
              <Paper
                //   shadow="xs"
                bg={"#F1F3F5"}
                style={{
                  position: "relative",
                  margin: "10px 0 10px 10px",
                  borderRadius: "20px 0 0 20px",
                  border: "0.0625rem solid #dee2e6",
                  borderRight: "none",
                  paddingTop: "10px",
                }}
                onMouseMove={() => {
                  if (!hover.left) {
                    handleMouseMove();
                  }

                  setIndicate("left");
                }}
                //   onMouseLeave={() => {
                //     handleMouseOut();
                //     setHover((prev) => ({ ...prev, left: false, right: false }));
                //   }}
                h={695}
                w={555}
              >
                <Text
                  weight={700}
                  style={{
                    position: "absolute",
                    zIndex: 102,
                    top: "50px",
                    left: "35%",
                  }}
                >
                  For Teachers
                </Text>
                {hover.left && !hover.right && (
                  <div
                    style={{ position: "absolute", top: "30%", left: "15%" }}
                  >
                    <Center>
                      <Text>
                        Please login to your account to start teaching with us
                      </Text>
                    </Center>
                    <Button
                      leftIcon={<FcGoogle />}
                      variant="default"
                      display={"block"}
                      w={"100%"}
                    >
                      Continue with Google
                    </Button>
                    <Button
                      leftIcon={<FaFacebook />}
                      display={"block"}
                      w={"100%"}
                      style={{ margin: "10px 0" }}
                    >
                      Continue with Facebook
                    </Button>
                    {/* Create a line-through a text OR */}

                    <Flex style={{ alignItems: "center", margin: "10px 0" }}>
                      <div
                        style={{
                          flex: 1,
                          height: "1px",
                          backgroundColor: "#dee2e6",
                        }}
                      />
                      <div style={{ margin: "0 10px" }}>Or</div>
                      <div
                        style={{
                          flex: 1,
                          height: "1px",
                          backgroundColor: "#dee2e6",
                        }}
                      />
                    </Flex>
                    <TextInput
                      style={{ margin: "15px 0" }}
                      placeholder="username"
                    />
                    <TextInput placeholder="password" />
                    <Button
                      display={"block"}
                      w={"100%"}
                      color="red"
                      style={{ marginTop: "15px" }}
                      onClick={() => {
                        navigate("/loading");
                      }}
                    >
                      Login
                    </Button>
                  </div>
                )}
                <Image
                  src={Each1}
                  height={675}
                  className={
                    !hover.left && !hover.right
                      ? "animation-begin-left"
                      : hover.left
                      ? "animation-move-right"
                      : ""
                  }
                  display={hover.right ? "none" : "block"}
                  onMouseMove={() => {
                    if (hover.left && indicate !== "left") {
                      setHover((prev) => ({
                        ...prev,
                        left: false,
                        right: true,
                      }));
                    }
                  }}
                  radius={20}
                />
              </Paper>
              <Paper
                //   shadow="xs"
                style={{
                  position: "relative",
                  margin: "10px 10px 10px 0",
                  borderRadius: "0 20px 20px 0",
                  border: "0.0625rem solid #dee2e6",
                  borderLeft: "none",
                  paddingTop: "10px",
                }}
                onMouseMove={() => {
                  if (!hover.right) {
                    handleMouseMove();
                  }
                  setIndicate("right");
                }}
                //   onMouseLeave={() => {
                //     handleMouseOut();
                //     setHover((prev) => ({ ...prev, left: false, right: false }));
                //   }}
                h={695}
                w={555}
              >
                <Text
                  weight={700}
                  style={{
                    position: "absolute",
                    zIndex: 102,
                    top: "50px",
                    left: "50%",
                  }}
                >
                  For Students
                </Text>
                {!hover.left && hover.right && (
                  <div
                    style={{ position: "absolute", top: "30%", left: "25%" }}
                  >
                    <Center>
                      <Text>
                        Please login to your account to start learning
                      </Text>
                    </Center>

                    <Button
                      leftIcon={<FcGoogle />}
                      variant="default"
                      display={"block"}
                      w={"100%"}
                    >
                      Continue with Google
                    </Button>
                    <Button
                      leftIcon={<FaFacebook />}
                      display={"block"}
                      w={"100%"}
                      style={{ margin: "10px 0" }}
                    >
                      Continue with Facebook
                    </Button>
                    {/* Create a line-through a text OR */}

                    <Flex style={{ alignItems: "center", margin: "10px 0" }}>
                      <div
                        style={{
                          flex: 1,
                          height: "1px",
                          backgroundColor: "#dee2e6",
                        }}
                      />
                      <div style={{ margin: "0 10px" }}>Or</div>
                      <div
                        style={{
                          flex: 1,
                          height: "1px",
                          backgroundColor: "#dee2e6",
                        }}
                      />
                    </Flex>
                    <TextInput
                      style={{ margin: "15px 0" }}
                      placeholder="username"
                    />
                    <TextInput placeholder="password" />
                    <Button
                      display={"block"}
                      w={"100%"}
                      color="red"
                      style={{ marginTop: "15px" }}
                      onClick={() => {
                        navigate("/loading");
                      }}
                    >
                      Login
                    </Button>
                  </div>
                )}
                <Image
                  src={Each2}
                  height={675}
                  className={
                    !hover.left && !hover.right
                      ? "animation-begin-right"
                      : hover.right
                      ? "animation-move-left"
                      : ""
                  }
                  display={hover.left ? "none" : "block"}
                  onMouseMove={() => {
                    if (hover.right && indicate !== "right") {
                      setHover((prev) => ({
                        ...prev,
                        left: true,
                        right: false,
                      }));
                    }
                  }}
                  radius={20}
                />
              </Paper>
            </Flex>
          </Center>
        </div>
      </div>
    </>
  );
};

export default Layout;
