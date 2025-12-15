import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AccountPreview.module.scss";
import Image from "~/components/Image";
import Button from "~/components/Button";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <Image className={cx("avatar")} src="null" alt="" />
                <Button className={cx('following-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx("body")}>
                <p className={cx("nickname")}>
                    <strong>PhuNQ</strong>
                    <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
                </p>
                <p className={cx("name")}>Nguyễn Quốc Phú</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>8.2M </strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>1.2B </strong>
                    <span className={cx("label")}>Like</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
