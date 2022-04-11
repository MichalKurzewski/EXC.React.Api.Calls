//https://randomuser.me/api
import axios from "axios";
import { useState, useEffect } from "react";

function ApiGetter() {
  interface UserName {
    title: string;
    first: string;
    last: string;
  }
  interface UserInfo {
    name: UserName;
    picture: { medium: string };
  }

  const [userInfos, setUserInfos] = useState<any>([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios.get(`https://randomuser.me/api?page=${pageNumber}`).then((res) => {
      const array = [...userInfos, ...res.data.results];
      setUserInfos(array);
    });
  }, [pageNumber]);

  const getFullName = (userInfo: UserInfo) => {
    const {
      name: { title, first, last },
    } = userInfo;
    const text = `${title} ${first} ${last}`;
    return text;
  };

  const getImage = (userInfo: UserInfo) => {
    const {
      picture: { medium },
    } = userInfo;
    return `${medium}`;
  };
  const appendNewUser = () => {
    setPageNumber(pageNumber + 1);
    setUserInfos([...userInfos]);
  };
  return (
    <>
      <button onClick={appendNewUser}>add new user</button>
      <div className="users-list">
        {userInfos.map((userInfo: UserInfo, idx: number) => (
          <div className="single-user" key={idx}>
            <p>{idx + 1}.</p>
            <p>{getFullName(userInfo)} </p>
            <img src={getImage(userInfo)} alt="userimg"></img>
          </div>
        ))}
      </div>
    </>
  );
}

export default ApiGetter;

//   const [apiResult, setApiResult] = useState("");
//   const data = JSON.stringify(res, null, 2);
//   setApiResult(data);
