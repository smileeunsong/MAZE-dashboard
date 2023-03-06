# MAZE 점주용 매출관리 대시보드
<p align="left"><img src="https://user-images.githubusercontent.com/111448985/220043904-60e71dc8-9c5e-47a8-8f4c-5132227d85cc.png" width="300px"></p>

- MAZE는 ICT 기반 개인 카페 스마트 오더 O2O(Online to Offline) 서비스를 제공하고자 합니다.
- 서비스 일부인 매출관리 대시보드를 통해 메뉴별, 시간별, 고객군별 매출 분석이 가능합니다.

</br>
</br>

## 핵심 기능
- 기간별 누적 매출 관리
- 데이터 시각화를 통한 매출 분석 (메뉴별, 시간별, 고객군별)
- 실시간 판매 모니터링
- 반응형 대시보드

</br>
</br>

## 시연 화면
- 카카오 로그인  

![카카오 로그인 구현](https://user-images.githubusercontent.com/111448985/220046358-064c61fc-33ed-49f0-a904-6a2d3b76ae96.gif)
<br>
<br>

- 구글 로그인

![구글 로그인 구현](https://user-images.githubusercontent.com/111448985/220046369-7ebc04a0-e8d1-4470-815e-f296fda6742a.gif)
<br>
<br>

- 일별 매출 데이터 조회

![일별 매출 데이터 조회](https://user-images.githubusercontent.com/111448985/220046391-c5317daa-bbf6-47bb-998b-4d655608171c.gif)
<br>
<br>

- 히트맵 매출 데이터 조회

![히트맵 매출 데이터 조회](https://user-images.githubusercontent.com/111448985/220046406-f6fddd78-3133-4ed9-9cad-ec93b111e446.gif)

<br>
<br>

## 링크
- <a href="https://maze-dashboard-wecode.netlify.app/">Netlify : 배포 링크</a>
- <a href="https://www.notion.so/Maze-Wecode-d73b4212f25e43ff968c5adc32cd6cdf">Notion : 세부사항 정리 중간 발표</a>
- <a href="https://www.notion.so/Maze-Wecode-c926dbf3e55d4ed19f758272adbaaed5">Notion : 세부사항 정리 최종 발표</a>
- <a href="https://docs.google.com/presentation/d/143y5fC5Mu6RUIq8OaurH0zLlxHBdAL6O8Y7xSRe5h9w/edit#slide=id.g197fe1dd980_0_10">Google Slides : 중간 발표자료</a>
- <a href="https://docs.google.com/presentation/d/1-o1-SoDOxlsqJgj1XzsN_1Ef2uD3fnc9Dmnf03DKeBM/edit#slide=id.gcb9a0b074_1_0">Google Slides : 최종 발표자료</a>

<br>
<br>

## 참여 개발자
|Front-end|Back-end|
| :--: | :--: |
|김우진|박은송|
|<img width="95px" height="95px" src="https://avatars.githubusercontent.com/u/111094669?v=4" alt="avatar"/> | <img width="95px" height="95px" src="https://avatars.githubusercontent.com/u/111448985?v=4" alt="avatar"/>|
|[<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/w00jinkim)|[<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/smileeunsong)|


</br>
</br>

## 개발 기간
- 2022-11-14 ~ 2022-12-09
- 2022-11-25 : 중간 발표
- 2022-12-09 : 최종 발표

</br>

### 1차 진행 완료 (2022-11-14 ~ 2022-11-25)
- FE : 대시보드 초기 기획 및 mock data로 UI 구성
- BE : SMS 본인 인증 서비스 구축 + 로그인
- FE & BE : 서비스 통합하여 Netlify / AWS EC2 배포

### 2차 진행 완료 (2022-11-28 ~ 2022-12-9)
- FE : OAuth 2.0 카카오 및 구글 로그인, UI & 기능 보완, 서버 <-> 대시보드 데이터 연결, 넷틀리파이 배포
- BE : https 서버 구축, 데이터베이스 스키마 구성, 매출 데이터 조회 API 구성, OAuth 카카오 및 구글 로그인
- FE & BE : OAuth 2.0 인증, 데이터 구성 합의 및 연결, 서비스 통합 배포

</br>
</br>

## ERD
<p align="center"><img src="https://user-images.githubusercontent.com/111448985/206466653-8d2260c1-3ef4-454d-bfd7-5eeddadd7535.png" width="900px"></p>

</br>
</br>

## API Document
- https://documenter.getpostman.com/view/24184557/2s8YmULKdU

<p align="center"><img src="https://user-images.githubusercontent.com/111448985/220048445-608cfcc0-6081-4783-a36f-67aaa6c4620d.png" width="900px"></p>


</br>
</br>

## TECH-STACKS 

### Front-End
<p>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?logo=TailwindCSS&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/Netlify-00C7B7?logo=Netlify&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/Kakao_API-FFCD00?logo=KakaoTalk&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/Google_API-4285F4?logo=Google&logoColor=white&style=for-the-badge" />
</p>
  
### Back-End
<p>
<img src="https://img.shields.io/badge/EC2-FF9900?logo=Amazon-EC2&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/RDS-527FFF?logo=Amazon-RDS&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/Node.js-339933?logo=Node.js&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/Express-000000?logo=Express&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/Sequelize-52B0E7?logo=Sequelize&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/mysql-4479A1?logo=mysql&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/redis-DC382D?logo=redis&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/Naver-31C954?logo=Naver&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/Amazon_AWS-232F3E?logo=AmazonAWS&logoColor=white&style=for-the-badge" />
 </p>

