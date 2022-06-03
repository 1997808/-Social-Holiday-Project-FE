import { FRIENDSHIP_STATUS } from "../app/constant"

export const canAddFriendByStatus = (status) => {
  switch (status) {
    case FRIENDSHIP_STATUS.NULL:
      return true
    case FRIENDSHIP_STATUS.PENDING:
      return false
    case FRIENDSHIP_STATUS.ACCEPTED:
      return false
    case FRIENDSHIP_STATUS.DECLINED:
      return true
    case FRIENDSHIP_STATUS.CANCEL:
      return true
    default:
      return false
  }
}