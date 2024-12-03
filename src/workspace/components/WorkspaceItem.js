import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

const WorkspaceItem = ({ id, name, count, wsdesc, onEdit, onDelete, onClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit(id);
    setMenuOpen(false);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(id);
    setMenuOpen(false);
  };

  return (
    <div key={id} className="workspace_item_container" onClick={onClick}>
      <div>
      <h1 className="workspace_name">{name}</h1>
      <p className="workspace_members">{count}명 참여중</p>
      <p className="workspace_desc">{wsdesc}</p>
      </div>
      <div className="menu_container">
        <FiMoreVertical className="menu_icon" onClick={handleMenuToggle} />
        {menuOpen && (
          <div className="menu_dropdown" onClick={(e)=>e.stopPropagation()}>
            <p className="menu_item" onClick={handleEditClick}>수정</p>
            <p className="menu_item" onClick={handleDeleteClick}>삭제</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkspaceItem;
