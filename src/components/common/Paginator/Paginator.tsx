import React, {useState} from "react";
import s from "./Paginator.module.css";

type PropsTypes = {
    activePage: number
    setActivePageTC: (pageNumber: number, usersOnPage: number) => void
    totalCount: number
    usersOnPage: number
    portionPages: number
}

const Paginator: React.FC<PropsTypes> = ({
                                             activePage,
                                             setActivePageTC,
                                             totalCount,
                                             usersOnPage,
                                             portionPages,
                                         }) => {
    const pagesCount = Math.ceil(totalCount / usersOnPage);
    const portionCount = Math.ceil(pagesCount / portionPages);
    const pages: number[] = [];
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
                    .filter((page) => page >= leftBorder && page <= rightBorder)
                    .map((page) => {
                        return (
                            <span
                                key={page}
                                className={activePage === page ? s.selectedPage : s.pageNumber}
                                onClick={() => {
                                    setActivePageTC(page, usersOnPage);
                                }}
                            >
                {page}
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
