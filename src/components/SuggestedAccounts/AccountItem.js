import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./SuggestedAccounts.module.scss";
import Image from "~/components/Image";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx("preview")}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
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
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
