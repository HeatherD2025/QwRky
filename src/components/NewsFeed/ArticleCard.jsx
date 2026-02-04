import React from "react";
import "../../styles/feeds.css";

const ArticleCard = ({ article, onRead }) => {
    return (
        <div className="news-card p-3">
            <p className="article-title">{article.title}</p>

            {article.urlToImage && (
              <img
                className="article-image"
                src={article.urlToImage}
                alt={article.title}
                style={{ width: "40em", height: "auto" }}
              />
            )}
            
            <p className="article-description">{article.description}</p>

            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <button
                onClick={() => onRead?.(article.url)}
                className="btn btn-sm btn-bd-custom"
                style={{
                  color: "#ffffff",
                  background: "#16333d",
                }}
              >
                Read full article
              </button>
            </a>

          </div>
    )
}

export default ArticleCard;