import { Center, Group, Text } from "@mantine/core";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import React from "react";

const Loading = () => {
  const [customColor, setCustomColor] = React.useState([
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
  ]);

  React.useEffect(() => {
    const interval2 = setInterval(() => {
      const newColor = "#FFD43B";
      setCustomColor((prev) => {
        const lastIndex = prev.lastIndexOf("black");
        if (lastIndex !== -1) {
          const newCustomColor = [...prev];
          newCustomColor[newCustomColor.indexOf("black")] = newColor;
          return newCustomColor;
        } else {
          clearInterval(interval2);
          return prev;
        }
      });
    }, 250);

    return () => {
      clearInterval(interval2);
    };
  }, []);

  return (
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
          <Logo customColor={customColor} animate={false} />
        </Center>
        <Progress />
        <Center>
          <Text>
            Chăm chỉ để không làm con{" "}
            <span style={{ textDecoration: "line-through double red" }}>
              đĩ
            </span>{" "}
            con khỉ
          </Text>
        </Center>
        <Group style={{ marginRight: "-100px" }} position="right">
          <svg
            width="207"
            height="110"
            viewBox="0 0 207 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="signature"
              d="M20.9162 18.3702C17.9056 17.2754 13.2813 39.8209 12.9399 43.1731C12.108 51.3406 11.3483 59.2951 9.41612 67.2385C8.82453 69.6706 8.62396 73.1928 8.62396 75.6518C8.62396 77.3798 14.5958 79.4055 15.89 79.7219C18.6034 80.3852 20.5333 80.1869 23.3746 79.7219C32.6711 78.2007 41.335 75.666 50.4175 73.2207C57.9778 71.1852 66.5679 69.4573 71.4508 62.5128C74.2316 58.5579 76.7358 49.7388 75.2204 44.976C74.4873 42.672 72.5334 40.5018 70.3308 39.5674C67.3724 38.3123 63.7185 39.1824 60.8249 40.1137C52.6708 42.738 44.3009 46.3678 37.7975 52.0781C30.5657 58.428 35.4001 68.7108 39.8462 75.1328C41.1286 76.9852 43.6902 80.7599 46.2381 80.7599C49.0498 80.7599 51.99 77.2704 53.6954 75.4606C57.2663 71.671 61.3362 68.3043 64.5671 64.2064C67.3492 60.678 68.7985 56.3882 71.2869 52.6791C72.7351 50.5204 74.655 48.6757 75.3843 46.1232C75.5223 45.6402 75.9852 43.9088 75.9852 45.2764C75.9852 56.8366 72.9382 69.6367 75.9852 80.9785C76.694 83.6168 77.4781 81.8281 78.7715 80.4868C86.0612 72.927 92.8894 64.711 98.1932 55.6292C101.31 50.2918 102.445 45.641 103.52 39.7313C103.631 39.1179 104.641 44.8652 104.776 45.7135C105.853 52.4689 107.532 59.1629 108.874 65.8727C108.946 66.2348 109.682 72.021 110.021 70.0521C111.497 61.4924 113.194 52.9157 116.249 44.7574C116.381 44.4039 119.165 37.3435 120.456 39.7313C123.438 45.2491 125.301 50.9886 127.012 57.0496C128.15 61.0841 129.373 65.2318 129.962 69.3965C130.214 71.1849 130.071 71.3058 130.071 69.2326C130.071 60.0545 130.951 50.5332 134.933 42.1351C136.487 38.8586 138.932 34.6829 141.953 38.8025C146.232 44.6365 148.536 52.4304 150.394 59.3442C151.196 62.3287 151.705 71.6128 151.705 68.5224C151.705 56.1153 153.999 43.7032 154.382 31.2633C154.599 24.2331 154.572 17.2064 154.683 10.1754C154.72 7.82583 154.528 4.90856 155.366 2.63614C156.4 -0.172562 155.651 8.61916 155.967 11.5958C158.855 38.8846 166.783 65.2279 167.931 92.779C167.947 93.1589 168.079 92.0215 168.259 91.6863C169.571 89.2373 171.622 87.1854 173.558 85.2398C182.455 76.2981 192.358 68.8841 202.267 61.147C203.244 60.3842 206.272 58.3754 205.081 58.7159C203.07 59.2904 200.85 60.5313 198.689 61.0924C166.073 69.5612 132.418 74.147 99.3677 80.5414C78.8065 84.5194 58.3247 88.8573 38.016 93.9809C27.06 96.7449 14.8746 98.9274 4.66314 104.033C3.02642 104.852 1.74033 105.309 1.74033 107.12C1.74033 109.022 7.94786 105.637 8.07764 105.59C38.1788 94.7846 69.4548 87.6885 99.9687 78.1922C109.877 75.1086 119.667 71.6199 129.77 69.2053C132.521 68.548 135.562 67.6637 138.43 67.539C151.687 66.9626 166.082 75.1015 178.256 69.014"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </Group>
      </div>
    </div>
  );
};

export default Loading;

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        } else {
          return prevProgress + 5;
        }
      });
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#007bff",
            transition: "width 0.2s ease-in-out",
          }}
        />
      </div>
      <Text
      // style={{
      //   width: `${progress}%`,
      //   height: "100%",
      //   backgroundColor: "#007bff",
      //   transition: "width 0.5s ease-in-out",
      // }}
      >
        {progress}
      </Text>
    </>
  );
};
