import React from "react";

function History() {
  const enlarge = (e) => {
    e.preventDefault();
    e.target.style.transform = "scale(1.10)";
  };
  const resize = (e) => {
    e.target.style.transform = "scale(1)";
  };
  return (
    <>
      <div
        class="card history-card animate__animated animate__fadeInLeft"
        id="history"
        onMouseOver={enlarge}
        onMouseLeave={resize}
      >
        <h2 class="my-3">History</h2>
        <div class="card-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections 1.10.32 and 1.10.33
          from de Finibus Bonorum et Malorum by Cicero are also reproduced in
          their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham.
        </div>
      </div>
    </>
  );
}

export default History;
