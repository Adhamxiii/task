import React from "react";
import styled from "styled-components";
import { articles } from "../data";
import SingleArticle from "./SingleArticle";
import PrimaryButton from "./PrimaryButton";

const Article = () => {
  return (
    <CategoryStyled>
      <Container>
        <div className="content">
          <div className="title">
            <p>
              Featured Article{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="5"
                  viewBox="0 0 35 5"
                  fill="none"
                >
                  <line
                    y1="3.5"
                    x2="35"
                    y2="3.5"
                    stroke="#2B2C34"
                    stroke-width="2"
                  />
                </svg>
              </span>
            </p>
          </div>
          <div className="title">
            <p>
              See All Article{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                >
                  <path
                    d="M1.20286 14.8762L1.20289 14.8762C1.38024 15.0487 1.60745 15.1472 1.84632 15.1482C2.00583 15.1585 2.16435 15.1248 2.30882 15.0513C2.45467 14.977 2.58112 14.8647 2.67935 14.7256C2.67938 14.7256 2.67941 14.7256 2.67943 14.7255L6.92897 8.7391L6.92952 8.7383C7.07328 8.53299 7.15 8.2786 7.15 8.01867C7.15 7.759 7.07343 7.50486 6.92994 7.29965C6.9298 7.29945 6.92966 7.29924 6.92952 7.29904L2.8264 1.31541C2.74574 1.19001 2.64284 1.08361 2.523 1.00411C2.40239 0.924097 2.26749 0.873279 2.12675 0.856304C1.98594 0.839321 1.84397 0.856788 1.71023 0.907014C1.57765 0.956802 1.457 1.0373 1.35508 1.1419C1.25423 1.23763 1.17161 1.35441 1.11088 1.4849C1.04965 1.61647 1.01156 1.76006 0.998201 1.90747C0.984842 2.0549 0.9964 2.20409 1.0324 2.34672C1.06836 2.48922 1.12823 2.62317 1.20942 2.74062C1.20949 2.74071 1.20955 2.74081 1.20962 2.7409L4.82179 8.01204L1.07479 13.2748L1.07467 13.275C0.992198 13.3912 0.930867 13.5241 0.893308 13.666C0.855747 13.8078 0.842478 13.9566 0.85405 14.1039C0.865622 14.2513 0.901876 14.3952 0.961295 14.5274C1.02071 14.6597 1.10246 14.7785 1.20286 14.8762Z"
                    fill="#2B2C34"
                    stroke="#2B2C34"
                    stroke-width="0.3"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div className="articles">
          {articles.map((article) => {
            return <SingleArticle key={article.id} {...article} />;
          })}
        </div>
        <PrimaryButton>More Article</PrimaryButton>
      </Container>
    </CategoryStyled>
  );
};

const CategoryStyled = styled.section`
  height: auto;
  width: 100%;
  padding: 68px 94px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  .content {
    display: flex;
    width: 100%;
    height: 35px;
    padding: 3px 0;
    justify-content: space-between;
    align-items: center;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    p {
      color: #2b2c34;
      font-size: 24px;
      font-weight: 700;
    }
  }

  .articles {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .articles {
      flex-direction: column;
      padding: 10px;
    }

    .title {
      justify-content: center;
      p {
        text-align: center;
        font-size: 12px;
      }
    }
  }
`;

export default Article;
