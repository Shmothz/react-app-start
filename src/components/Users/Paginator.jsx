import React, { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = ({
  activePage,
  setActivePage,
  totalCount,
  usersOnPage,
  portionPages = 5,
}) => {
  const pagesCount = Math.ceil(totalCount / usersOnPage);
  const portionCount = Math.ceil(pagesCount / portionPages);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  const renderVisiblePortion = Math.ceil(activePage / portionPages);
  const [portion, setPortion] = useState(renderVisiblePortion);

  const leftBorder = (portion - 1) * portionPages + 1;
  const rightBorder = portion * portionPages;

  return (
    <div className={s.wrapperNavPages}>
      {portion > 1 && (
        <button
          className={s.prevButton}
          onClick={() => {
            setPortion(portion - 1);
          }}
        />
      )}
      <div className={s.pagesNumbersWrapper}>
        {pages
          .filter((p) => p >= leftBorder && p <= rightBorder)
          .map((p) => {
            return (
              <span
                key={p.id}
                className={activePage === p ? s.selectedPage : s.pageNumber}
                onClick={() => {
                  setActivePage(p);
                }}
              >
                {p}
              </span>
            );
          })}
      </div>
      {portion < portionCount && (
        <button
          className={s.nextButton}
          onClick={() => {
            setPortion(portion + 1);
          }}
        />
      )}
    </div>
  );
};

export default Paginator;
