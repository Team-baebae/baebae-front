import styled from 'styled-components'
import { colors } from '../../styles/colors'
import ForwardArrow from '../../assets/ForwardArrow.svg'
import { useState } from 'react'
import Modal from '../common/Modal'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const navigate = useNavigate()

  // 모달 버튼 클릭 유무를 저장할 state
  const [showModal, setShowModal] = useState(false)
  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
  const clickModal = () => setShowModal(!showModal)

  // 모달 버튼 클릭 유무를 저장할 state
  const [showModal2, setShowModal2] = useState(false)
  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
  const clickModal2 = () => setShowModal2(!showModal2)

  return (
    <Container>
      <ContentsWrapper>
        <Contents>개인정보처리방침</Contents>
        <RightIcon
          src={ForwardArrow}
          onClick={() => {
            navigate('/setting/privacyPolicy')
          }}
        />
      </ContentsWrapper>
      <ContentsWrapper>
        <Contents>이용약관</Contents>
        <RightIcon
          src={ForwardArrow}
          onClick={() => {
            navigate('/setting/term')
          }}
        />
      </ContentsWrapper>
      <ContentsWrapper>
        <Contents>
          문의하기
          <SubContents>평일 오전 9시-오후 6시 운영</SubContents>
        </Contents>
        <RightIcon src={ForwardArrow} />
      </ContentsWrapper>
      <ContentsWrapper onClick={clickModal2}>
        <Contents>로그아웃</Contents>
        <RightIcon src={ForwardArrow} />
      </ContentsWrapper>
      {showModal2 && (
        <Modal
          content="로그아웃 하시겠습니까?"
          buttonText1="예"
          buttonText2="아니오"
          func1={() => console.log('logout')}
          func2={clickModal2}
          clickModal={clickModal2}
        />
      )}
      <ContentsWrapper onClick={clickModal}>
        <Contents>
          회원 탈퇴
          <SubContents>게시된 정보가 다 사라져요</SubContents>
        </Contents>
        <RightIcon src={ForwardArrow} />
      </ContentsWrapper>
      {showModal && (
        <Modal
          content="정말 탈퇴하시겠습니까?"
          buttonText1="아니오"
          buttonText2="예"
          func1={clickModal}
          func2={() => console.log('delete account')}
          clickModal={clickModal}
        />
      )}
    </Container>
  )
}

export default Settings

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 20px;
  padding: 20px;
  gap: 20px;
  border-radius: 20px;
  background-color: ${colors.white};
`
const ContentsWrapper = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
const Contents = styled.div`
  color: ${colors.black};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const SubContents = styled.div`
  color: ${colors.grey4};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 4px;
`
const RightIcon = styled.img`
  width: 24px;
  height: 24px;
`
