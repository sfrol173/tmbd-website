import React from "react";
import PropTypes from "prop-types";
import {ModalWrapper,ModalBox,ModalClose,ModalContent,ModalHeader,ModalFooter} from "../../../../components/ModalBase";
import Button from "../../../../components/Button/Button.jsx";

import './ModalMovies.scss'

const ModalMovies = (props) => {
	const {
		img,
		title,
		subTitle,
		desc,
		onClick,
		onClose,
		isOpen,
		isDelete,
	} = props;
	return (
		<ModalWrapper onClick={onClose} isOpen={isOpen}>
			<ModalBox className="modal-movies">
				<ModalClose onClick={onClose} />
				<ModalHeader>
					<div className="image">
						<img src={img} alt={title}/>
					</div>
				</ModalHeader>
				<ModalContent>
					<h4 className="modal-title">{title}</h4>
					<p className="modal-subTitle"><i>{subTitle}</i></p>
					<p className="modal-desc">{desc}</p>
				</ModalContent>
				<ModalFooter>
					<div className="button-wrapper">
						<Button onClick={onClick} isDel={isDelete}>{isDelete ? "Прибрати з улюблених" : "Додати до улюблених"}</Button>
					</div>
				</ModalFooter>
			</ModalBox>
		</ModalWrapper>
	)
}

ModalMovies.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	subTitle: PropTypes.string,
	desc: PropTypes.string,
	onClick: PropTypes.func,
	onClose: PropTypes.func,
	isOpen: PropTypes.bool,
	isDelete: PropTypes.bool
}

export default ModalMovies