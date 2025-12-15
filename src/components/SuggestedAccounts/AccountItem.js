import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SuggestedAccounts.module.scss";
import Image from "../Image";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("account-item")}>
            <Image src="null" alt="" className={cx("avatar")} />
            <div className={cx("item-info")}>
                <p className={cx("nickname")}>
                    <strong>PhuNQ</strong>
                    <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
                </p>
                <p className={cx("name")}>Nguyễn Quốc Phú</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
