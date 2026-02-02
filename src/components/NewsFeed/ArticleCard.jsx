import "../../styles/feeds.css";

const ArticleCard = ({ article, onRead }) => {
    return (
        <div className="newsCard p-3">
            <p className="articleTitle">{article.title}</p>

            {article.urlToImage && (
              <img
                className="articleImage"
                src={article.urlToImage}
                alt={article.title}
                style={{ width: "40em", height: "auto" }}
              />
            )}
            
            <p className="articleDescription">{article.description}</p>

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