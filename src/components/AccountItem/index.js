import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <Image
                className={cx("avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d02ad53123f7cb36cd0017ec4f34a411~tplv-tiktokx-cropcenter:100:100.jpeg?biz_tag=tiktok_user.user_cover&dr=14579&idc=my&ps=13740610&refresh_token=b7ec9a6a&shcp=c1333099&shp=30310797&t=4d5b0474&x-expires=1765155600&x-signature=xFH2nFkHyej3Hico1OsU4YBQXCs%3D"
                alt=""
            />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    Hòa Minzy
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </p>
                <span className={cx("username")}>Hoaminzy</span>
            </div>
        </div>
    );
}

export default AccountItem;
