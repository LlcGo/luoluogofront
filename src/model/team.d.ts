import UserType from "@/model/user";

/**
 * 定义用户类型
 */
type TeamType = {
    teamId: number
    description: String,
    expireTime?: Date,
    maxNum: Number,
    teamName: String,
    password?: String,
    teamStatus: Number,
    updateTime: Date,
    userId: Number,
    createTime: Date,
    currentUser?: UserType
  };

  export default TeamType
