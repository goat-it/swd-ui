import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuoteDetail from "~/components/QuoteDetail";
import "~/components/RequestStatus/NewRequest/NewRequest.scss";
const NewRequest = () => {
  const userAuth = useSelector((state) => state.auth.login.currentUser);
  const navigate = useNavigate();
  const [showDetailQuote, setShowDetailQuote] = useState(false);
  const [quoteDetailData, setQuoteDetailData] = useState({});
  const [quoteData, setQuoteData]=useState();
  const data = {
    id: userAuth.Id,
    status: "1",
  };
  useEffect(() => {
    if (userAuth.Id !== "") {
      axios
      .get(`https://localhost:7058/api/requests/status?Id=${data.id}&Status=${data.status}`)
        .then((response) => {
          setQuoteData(response.data);
        });
    }
  }, [userAuth.Id]);
 
  const GoProduct = (product) => {
     
     navigate("/ProductDetail", { state: { productId : product} });
  };

  const ShowDetailQuote = (quotes) => {
    setShowDetailQuote(true);
    setQuoteDetailData(quotes);
  };
  return (
    <div className="quote_item_view">
      {showDetailQuote && (
        <QuoteDetail
          setShowDetailQuote={setShowDetailQuote}
          quoteData={quoteDetailData}
        />
      )}
      {quoteData?.map((IsQuote, index) => (
        <div
          key={index}
          className="quote_item"
          onClick={() => {
            ShowDetailQuote(IsQuote);
          }}
        >
          <div className="quote_item_1">
            <div className="quote_item_cate">
              Mã Dự Án {IsQuote.prodcuctData.productCate}:
              <div className="quote_item_status">Goat#0{IsQuote.requestId}</div>
              <div className="quote_item_status">- {IsQuote.status}</div>
            </div>
            <div className="quote_item_dateCreate">
              Ngày tạo : {IsQuote.dateCreate?.split('T')[0]}
            </div>
          </div>
          <div className="quote_item_2">
            <img
              className="quote_item_productImg"
              src={IsQuote.prodcuctData.productThumbnail}
              alt="Ảnh"
            />
            <div
              className="quote_item_productName"
              onClick={(e) => {
                e.stopPropagation();
                GoProduct(IsQuote.prodcuctData.productId);
              }}
            >
              {IsQuote.prodcuctData.productName}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NewRequest;
