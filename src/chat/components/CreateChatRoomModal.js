import { useState } from "react";

const CreateChatRoomModal = ({ isOpen, onClose }) => {
  // 모달이 열렸을 때 폼에서 입력하는 값을 관리하는 상태
  const [chatRoomName, setChatRoomName] = useState("");
  const [selectedFriends, setSelectedFriends] = useState([]); // 선택된 친구 목록
  const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지 파일 선택

  // 친구 목록 더미 데이터
  const friendsList = [
    { id: 1, name: "친구1" },
    { id: 2, name: "친구2" },
    { id: 3, name: "친구3" },
    { id: 4, name: "친구4" },
    { id: 5, name: "친구5" },
  ];

  //폼에서 채팅방 이름을 변경하는 함수
  const handleInputChange = (e) => {
    setChatRoomName(e.target.value);
  };

  // 친구 선택 변경 함수
  const handleFriendSelect = (e, friendId) => {
    if (e.target.checked) {
      setSelectedFriends((prevSelected) => [...prevSelected, friendId]);
    } else {
      setSelectedFriends((prevSelected) =>
        prevSelected.filter((id) => id !== friendId)
      );
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files ? e.target.files[0] : null; // 파일이 있는지 확인
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // 선택된 파일을 미리보기로 사용
    }
  };

  // 모달 닫기 버튼
  const handleClose = () => {
    onClose(); // 부모 컴포넌트에게 모달을 닫을 것을 알림
  };

  //채팅방 생성 버튼 클릭시
  const handleCreate = () => {
    // 채팅방 생성 API 호출이나 데이터 저장 등 처리 가능
    console.log(` 새 채팅방 이름 : ${chatRoomName}`);
    console.log(`선택된 친구들 : ${selectedFriends}`);
    console.log(` 선택된 이미지 : ${selectedImage}`);
    onClose(); // 채팅방 생성 후 모달 닫기
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal_wrapper">
        <div className="modal_content">
          <h1> 채팅방 생성 </h1>

          {/* 이미지 선택 (기본 동그라미 이미지와 선택된 이미지 변경) */}
          <div className="modal_img">
            <img
              src={selectedImage || "../../asset/imgs/default-profile.png"}
              // 이미지가 선택되지 않으면 기본 이미지로 동그라미 표시
              alt="채팅방 이미지"
            />
          </div>
          <input type="file" accept="image/*" onChange={handleImageChange} />

          {/* 채팅방 이름 입력 */}
          <input
            id="file_input"
            type="file"
            value={chatRoomName}
            onChange={handleInputChange}
            placeholder="채팅방 이름"
          />

          {/* 친구 추가 목록 */}
          <div className="friends-list">
            <h2>친구 추가</h2>
            <ul>
              {friendsList.map((friend) => (
                <li key={friend.id}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => handleFriendSelect(e, friend.id)}
                    />
                    {friend.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* 버튼들  */}
          <button onClick={handleCreate}>생성</button>
          <button onClick={handleClose}>닫기</button>
        </div>
      </div>
    </>
  );
};

export default CreateChatRoomModal;
