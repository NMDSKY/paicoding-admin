/* eslint-disable prettier/prettier */
import { FC } from "react";
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { ContentInterWrap } from "@/components/common-wrap";

import "./index.scss";
import { UpdateEnum } from "@/enums/common";

interface IProps {
	handleSave: (e: object) => void;
	goBack: () => void;
	status: number;
}

const Search: FC<IProps> = ({ handleSave, goBack, status }) => {
	return (
		<div className="article-edit-search">
			{/* 搜索 */}
			<ContentInterWrap className="article-edit-search__wrap">
				<div className="article-edit-search__search">
					<div className="article-edit-search__search-item">
						<Button onClick={goBack}><ArrowLeftOutlined />返回文章列表</Button>
					</div>
					<div className="article-edit-search__search-btn">
						<Button type="primary" icon={<SaveOutlined />} style={{ marginRight: "25px" }} onClick={handleSave}>
							{status === UpdateEnum.Edit ? "更新" : "保存"}
						</Button>
					</div>
				</div>
			</ContentInterWrap>
		</div>
	);
};
export default Search;
