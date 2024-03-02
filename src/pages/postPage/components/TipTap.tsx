/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
import styled from '@emotion/styled';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Color from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
import Highlight from '@tiptap/extension-highlight';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Italic from '@tiptap/extension-italic';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

// custom
import { FontSize } from '../utils/fontSize';
import { FontWeight } from '../utils/fontWeight';
import { LineHeight } from '../utils/lineHeight';
import './tiptap.css';

// editor svg
import {
  EditorDropIcnOpen,
  EditorDropIcnClose,
  EditorTextColorBlackIcn,
  EditorTextColorBlueIcn,
  EditorTextColorGrayIcn,
  EditorTextColorGreenIcn,
  EditorTextColorOrangeIcn,
  EditorTextColorPinkIcn,
  EditorTextColorRedIcn,
  EditorTextColorVioletIcn,
  EditorTextColorYellowIcn,
} from '../../../assets/svgs';

// 밖 클릭해서 닫히게 하기
import useClickOutside from '../../../hooks/useClickOutside';

interface EditorPropTypes {
  title: string | undefined;
  setTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tempContent: string;
  editContent: string;
  setEditorContent: (content: string) => void;
}

const TipTap = (props: EditorPropTypes) => {
  const { title, setTitle, tempContent, editContent, setEditorContent } = props;
  // toolbar 드롭다운 전체 핸들
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  // font size drop down
  const [isFontSizeOpen, setIsFontSizeOpen] = useState(false);
  // font color drop down
  const [isFontColorOpen, setIsFontColorOpen] = useState(false);
  // font background color drop down
  const [isFontBgColorOpen, setIsFontBgColorOpen] = useState(false);

  const onClickFontSizeToggle = () => {
    setIsFontSizeOpen(!isFontSizeOpen);
    setIsToggleOpen(!isToggleOpen);
  };

  const onClickFontColorToggle = () => {
    setIsFontColorOpen(!isFontColorOpen);
    setIsToggleOpen(!isToggleOpen);
  };

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      TextStyle,
      Placeholder.configure({ placeholder: '글을 작성해 주세요' }),
      FontSize.configure({ types: ['textStyle'], defaultSize: '1.6rem' }),
      FontWeight.configure({ types: ['textStyle'], defaultWeight: '400' }),
      LineHeight.configure({ types: ['textStyle'], defaultLineHeight: '160%' }),
      Color,
      Highlight.configure({ multicolor: true }),
      Bold,
      Underline,
      Strike,
      Italic,
      TextAlign.configure({
        types: ['paragraph'],
        alignments: ['center', 'left'],
        defaultAlignment: 'left',
      }),
      ListItem,
      BulletList,
      OrderedList,
      Blockquote,
      HorizontalRule,
    ],
    content: '',
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  }) as Editor;

  // 에디터 content 업데이트
  useEffect(() => {
    if (tempContent) {
      editor.commands.setContent(tempContent);
    }
    if (editor && editContent) {
      editor.commands.setContent(editContent);
    }
  }, [editor, tempContent, editContent]);

  // 글자 크기 함수
  const toggleFontSizeContent2 = useCallback(() => {
    editor.chain().focus().setFontSize('1.2rem').run();
    editor.chain().focus().setFontWeight('400').run();
    editor.chain().focus().setLineHeight('200%').run();
    setIsFontSizeOpen(false);
  }, [editor]);
  const toggleFontSizeContent1 = useCallback(() => {
    editor.chain().focus().setFontSize('1.6rem').run();
    editor.chain().focus().setFontWeight('400').run();
    editor.chain().focus().setLineHeight('160%').run();
    setIsFontSizeOpen(false);
  }, [editor]);
  const toggleFontSizeTitle2 = useCallback(() => {
    editor.chain().focus().setFontSize('1.8rem').run();
    editor.chain().focus().setFontWeight('700').run();
    editor.chain().focus().setLineHeight('200%').run();
    setIsFontSizeOpen(false);
  }, [editor]);
  const toggleFontSizeTitle1 = useCallback(() => {
    editor.chain().focus().setFontSize('2.6rem').run();
    editor.chain().focus().setFontWeight('700').run();
    editor.chain().focus().setLineHeight('200%').run();
    setIsFontSizeOpen(false);
  }, [editor]);

  // 글자 색상 함수
  const toggleTextBlack = useCallback(() => {
    editor.chain().focus().setColor('#010101').run();
    setIsFontColorOpen(false);
  }, [editor]);
  const toggleTextGray = useCallback(() => {
    editor.chain().focus().setColor('#505050').run();
    setIsFontColorOpen(false);
  }, [editor]);
  const toggleTextRed = useCallback(() => {
    editor.chain().focus().setColor('#B81616').run();
    setIsFontColorOpen(false);
  }, [editor]);
  const toggleTextOrange = useCallback(() => {
    editor.chain().focus().setColor('#DA5B24').run();
    setIsFontColorOpen(false);
  }, [editor]);
  const toggleTextYellow = useCallback(() => {
    editor.chain().focus().setColor('#C5B525').run();
    setIsFontColorOpen(false);
  }, [editor]);
  const toggleTextGreen = useCallback(() => {
    editor.chain().focus().setColor('#2F7417').run();
    setIsFontColorOpen(false);
  }, [editor]);
  const toggleTextBlue = useCallback(() => {
    editor.chain().focus().setColor('#172B74').run();
    setIsFontColorOpen(false);
  }, [editor]);
  const toggleTextViolet = useCallback(() => {
    editor.chain().focus().setColor('#6139D1').run();
    setIsFontColorOpen(false);
  }, [editor]);
  const toggleTextPink = useCallback(() => {
    editor.chain().focus().setColor('#951479').run();
    setIsFontColorOpen(false);
  }, [editor]);

  // 글자 배경색 함수
  const toggleHighLightWhite = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#FFFFFF' }).run();
  }, [editor]);
  const toggleHighLightGray = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#EAEAEA' }).run();
  }, [editor]);
  const toggleHighLightRed = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#F6E2E2' }).run();
  }, [editor]);
  const toggleHighLightOrange = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#F6E7E2' }).run();
  }, [editor]);
  const toggleHighLightYellow = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#F6F4E2' }).run();
  }, [editor]);
  const toggleHighLightGreen = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#F1F6E2' }).run();
  }, [editor]);
  const toggleHighLightBlue = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#E2EAF6' }).run();
  }, [editor]);
  const toggleHighLightViolet = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#E9E3F8' }).run();
  }, [editor]);
  const toggleHighLightPink = useCallback(() => {
    editor.chain().focus().toggleHighlight({ color: '#F6E2F3' }).run();
  }, [editor]);

  // bold 함수
  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  // 밑줄 함수
  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);

  // 취소선 함수
  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);

  // 기울기 함수
  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  // 왼쪽 정렬 함수
  const toggleAlignLeft = useCallback(() => {
    editor.chain().focus().setTextAlign('left').run();
  }, [editor]);

  // 가운데 정렬 함수
  const toggleAlignCenter = useCallback(() => {
    editor.chain().focus().setTextAlign('center').run();
  }, [editor]);

  // Bullet 리스트 함수
  const toggleBulletList = useCallback(() => {
    editor.chain().focus().toggleBulletList().run();
  }, [editor]);

  // Ordered 리스트 함수
  const toggleOrderedList = useCallback(() => {
    editor.chain().focus().toggleOrderedList().run();
  }, [editor]);

  // 인용구 함수
  const toggleBlockQuote = useCallback(() => {
    editor.chain().focus().toggleBlockquote().run();
  }, [editor]);

  // 구분선 함수
  const toggleHorizontalRule = useCallback(() => {
    editor.chain().focus().setHorizontalRule().run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="text-editor">
      <Title type="text" placeholder="제목을 적어주세요" onChange={setTitle} value={title} />
      <ToolbarWrapper className="menu">
        {/* 글자 크기 */}
        <ToolbarDropDownWrapper>
          <FontSizeToggle onClick={onClickFontSizeToggle}>
            <FontSizeLabel>
              {editor.isActive('textStyle', { fontSize: '1.2rem' })
                ? '본문 2'
                : editor.isActive('textStyle', { fontSize: '1.6rem' })
                  ? '본문 1'
                  : editor.isActive('textStyle', { fontSize: '1.8rem' })
                    ? '제목 2'
                    : editor.isActive('textStyle', { fontSize: '2.6rem' })
                      ? '제목 1'
                      : '본문 1'}
            </FontSizeLabel>
            {isFontSizeOpen ? <EditorDropIcnOpen /> : <EditorDropIcnClose />}
          </FontSizeToggle>
          <FontSizeOptionList $isFontSizeOpen={isFontSizeOpen}>
            <FontSizeOption onClick={toggleFontSizeContent2}>
              <FontSizeText
                className={editor.isActive('textStyle', { fontSize: '1.2rem' }) ? 'is-active' : ''}
              >
                본문 2
              </FontSizeText>
            </FontSizeOption>
            <FontSizeOption onClick={toggleFontSizeContent1}>
              <FontSizeText
                className={editor.isActive('textStyle', { fontSize: '1.6rem' }) ? 'is-active' : ''}
              >
                본문 1
              </FontSizeText>
            </FontSizeOption>
            <FontSizeOption onClick={toggleFontSizeTitle2}>
              <FontSizeText
                className={editor.isActive('textStyle', { fontSize: '1.8rem' }) ? 'is-active' : ''}
              >
                제목 2
              </FontSizeText>
            </FontSizeOption>
            <FontSizeOption onClick={toggleFontSizeTitle1}>
              <FontSizeText
                className={editor.isActive('textStyle', { fontSize: '2.6rem' }) ? 'is-active' : ''}
              >
                제목 1
              </FontSizeText>
            </FontSizeOption>
          </FontSizeOptionList>
        </ToolbarDropDownWrapper>

        {/* 글자색 */}
        <ToolbarDropDownWrapper>
          <TextColorToggle onClick={onClickFontColorToggle}>
            {editor.isActive('textStyle', { color: '#010101' }) ? (
              <EditorTextColorBlackIcn />
            ) : editor.isActive('textStyle', { color: '#505050' }) ? (
              <EditorTextColorGrayIcn />
            ) : editor.isActive('textStyle', { color: '#B81616' }) ? (
              <EditorTextColorRedIcn />
            ) : editor.isActive('textStyle', { color: '#DA5B24' }) ? (
              <EditorTextColorOrangeIcn />
            ) : editor.isActive('textStyle', { color: '#C5B525' }) ? (
              <EditorTextColorYellowIcn />
            ) : editor.isActive('textStyle', { color: '#2F7417' }) ? (
              <EditorTextColorGreenIcn />
            ) : editor.isActive('textStyle', { color: '#172B74' }) ? (
              <EditorTextColorBlueIcn />
            ) : editor.isActive('textStyle', { color: '#6139D1' }) ? (
              <EditorTextColorVioletIcn />
            ) : editor.isActive('textStyle', { color: '#951479' }) ? (
              <EditorTextColorPinkIcn />
            ) : (
              <EditorTextColorBlackIcn />
            )}
            {isFontColorOpen ? <EditorDropIcnOpen /> : <EditorDropIcnClose />}
          </TextColorToggle>
          <TextColorList $isFontColorOpen={isFontColorOpen}>
            <TextColorOptionWrapper onClick={toggleTextBlack}>
              <EditorTextColorBlackIcn
                className={editor.isActive('textStyle', { color: '#010101' }) ? 'is-active' : ''}
              />
              <TextColorText
                className={editor.isActive('textStyle', { color: '#010101' }) ? 'is-active' : ''}
              >
                black
              </TextColorText>
            </TextColorOptionWrapper>
            <TextColorOptionWrapper onClick={toggleTextGray}>
              <EditorTextColorGrayIcn
                className={editor.isActive('textStyle', { color: '#505050' }) ? 'is-active' : ''}
              />
              <TextColorText
                className={editor.isActive('textStyle', { color: '#505050' }) ? 'is-active' : ''}
              >
                gray
              </TextColorText>
            </TextColorOptionWrapper>
            <TextColorOptionWrapper onClick={toggleTextRed}>
              <EditorTextColorRedIcn
                className={editor.isActive('textStyle', { color: '#B81616' }) ? 'is-active' : ''}
              />
              <TextColorText
                className={editor.isActive('textStyle', { color: '#B81616' }) ? 'is-active' : ''}
              >
                red
              </TextColorText>
            </TextColorOptionWrapper>
            <TextColorOptionWrapper onClick={toggleTextOrange}>
              <EditorTextColorOrangeIcn
                className={editor.isActive('textStyle', { color: '#DA5B24' }) ? 'is-active' : ''}
              />
              <TextColorText
                className={editor.isActive('textStyle', { color: '#DA5B24' }) ? 'is-active' : ''}
              >
                orange
              </TextColorText>
            </TextColorOptionWrapper>
            <TextColorOptionWrapper onClick={toggleTextYellow}>
              <EditorTextColorYellowIcn
                className={editor.isActive('textStyle', { color: '#C5B525' }) ? 'is-active' : ''}
              />
              <TextColorText
                className={editor.isActive('textStyle', { color: '#C5B525' }) ? 'is-active' : ''}
              >
                yellow
              </TextColorText>
            </TextColorOptionWrapper>
            <TextColorOptionWrapper onClick={toggleTextGreen}>
              <EditorTextColorGreenIcn
                className={editor.isActive('textStyle', { color: '#2F7417' }) ? 'is-active' : ''}
              />
              <TextColorText
                className={editor.isActive('textStyle', { color: '#2F7417' }) ? 'is-active' : ''}
              >
                green
              </TextColorText>
            </TextColorOptionWrapper>
            <TextColorOptionWrapper onClick={toggleTextBlue}>
              <EditorTextColorBlueIcn
                className={editor.isActive('textStyle', { color: '#172B74' }) ? 'is-active' : ''}
              />
              <TextColorText
                className={editor.isActive('textStyle', { color: '#172B74' }) ? 'is-active' : ''}
              >
                blue
              </TextColorText>
            </TextColorOptionWrapper>
            <TextColorOptionWrapper onClick={toggleTextViolet}>
              <EditorTextColorVioletIcn
                className={editor.isActive('textStyle', { color: '#6139D1' }) ? 'is-active' : ''}
              />
              <TextColorText
                className={editor.isActive('textStyle', { color: '#6139D1' }) ? 'is-active' : ''}
              >
                violet
              </TextColorText>
            </TextColorOptionWrapper>
            <TextColorOptionWrapper onClick={toggleTextPink}>
              <EditorTextColorPinkIcn
                className={editor.isActive('textStyle', { color: '#951479' }) ? 'is-active' : ''}
              />
              <TextColorText
                className={editor.isActive('textStyle', { color: '#951479' }) ? 'is-active' : ''}
              >
                pink
              </TextColorText>
            </TextColorOptionWrapper>
          </TextColorList>
        </ToolbarDropDownWrapper>

        {/* 글자 배경색 */}
        <button
          className={editor.isActive('highlight', { color: '#FFFFFF' }) ? 'is-active' : ''}
          onClick={toggleHighLightWhite}
        >
          white
        </button>
        <button
          className={editor.isActive('highlight', { color: '#EAEAEA' }) ? 'is-active' : ''}
          onClick={toggleHighLightGray}
        >
          gray
        </button>
        <button
          className={editor.isActive('highlight', { color: '#F6E2E2' }) ? 'is-active' : ''}
          onClick={toggleHighLightRed}
        >
          red
        </button>
        <button
          className={editor.isActive('highlight', { color: '#F6E7E2' }) ? 'is-active' : ''}
          onClick={toggleHighLightOrange}
        >
          orange
        </button>
        <button
          className={editor.isActive('highlight', { color: '#F6F4E2' }) ? 'is-active' : ''}
          onClick={toggleHighLightYellow}
        >
          yellow
        </button>
        <button
          className={editor.isActive('highlight', { color: '#F1F6E2' }) ? 'is-active' : ''}
          onClick={toggleHighLightGreen}
        >
          green
        </button>
        <button
          className={editor.isActive('highlight', { color: '#E2EAF6' }) ? 'is-active' : ''}
          onClick={toggleHighLightBlue}
        >
          blue
        </button>
        <button
          className={editor.isActive('highlight', { color: '#E9E3F8' }) ? 'is-active' : ''}
          onClick={toggleHighLightViolet}
        >
          violet
        </button>
        <button
          className={editor.isActive('highlight', { color: '#F6E2F3' }) ? 'is-active' : ''}
          onClick={toggleHighLightPink}
        >
          pink
        </button>

        <button
          className={classNames('menu-button', {
            'is-active': editor.isActive('bold'),
          })}
          onClick={toggleBold}
        >
          bold
        </button>
        <button
          className={classNames('menu-button', {
            'is-active': editor.isActive('underline'),
          })}
          onClick={toggleUnderline}
        >
          underline
        </button>
        <button
          className={classNames('menu-button', {
            'is-active': editor.isActive('strike'),
          })}
          onClick={toggleStrike}
        >
          strike
        </button>
        <button
          className={classNames('menu-button', {
            'is-active': editor.isActive('italic'),
          })}
          onClick={toggleItalic}
        >
          italic
        </button>

        {/* 정렬 */}
        <button
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
          onClick={toggleAlignLeft}
        >
          left
        </button>
        <button
          className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
          onClick={toggleAlignCenter}
        >
          center
        </button>

        {/* 리스트 */}
        <button
          className={editor.isActive('bulletList') ? 'is-active' : ''}
          onClick={toggleBulletList}
        >
          bulletList
        </button>
        <button
          className={editor.isActive('orderedList') ? 'is-active' : ''}
          onClick={toggleOrderedList}
        >
          orderedList
        </button>

        {/* 인용구 */}
        <button
          className={editor.isActive('blockquote') ? 'is-active' : ''}
          onClick={toggleBlockQuote}
        >
          blockquote
        </button>

        {/* 구분선 */}
        <button onClick={toggleHorizontalRule}>구분선</button>
      </ToolbarWrapper>
      <div className="editorWrapper">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TipTap;

const Title = styled.input`
  width: 82.6rem;
  height: 9.4rem;
  padding: 2.8rem;

  color: ${({ theme }) => theme.colors.grayBlack};

  border: 0;
  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.title3};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

// 툴바 전체 감싸기
const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 53.3rem;
  height: 3.6rem;
  margin: 0;
  padding: 0;

  background-color: white;
  border: 1px solid #d3d3d3;
  border-radius: 0.8rem;
`;

// 글자 크기 드롭다운 리스트
const ToolbarDropDownWrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  cursor: pointer;
`;

const FontSizeToggle = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;
  width: 10.1rem;
  padding: 0 1.3rem;

  background-color: white;
`;

const FontSizeLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray90};
  ${({ theme }) => theme.fonts.body7}
`;

const FontSizeOptionList = styled.div<{ $isFontSizeOpen: boolean }>`
  position: absolute;
  top: 2.9rem;
  display: ${({ $isFontSizeOpen }) => ($isFontSizeOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  justify-content: flex-start;
  width: 8.8rem;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  border-radius: 10px;
`;

const FontSizeOption = styled.div`
  width: 6.8rem;
  padding: 0.6rem 1rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;

  :hover {
    background-color: ${({ theme }) => theme.colors.gray20};
  }

  .is-active {
    color: ${({ theme }) => theme.colors.mainViolet};
  }
`;

const FontSizeText = styled.p`
  ${({ theme }) => theme.fonts.body7}
  color: ${({ theme }) => theme.colors.gray90};
`;

// 글자 색상 드롭다운
const TextColorToggle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: 8.1rem;
  padding: 0 1.3rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const TextColorList = styled.div<{ $isFontColorOpen: boolean }>`
  position: absolute;
  top: 2.9rem;

  display: ${({ $isFontColorOpen }) => ($isFontColorOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  justify-content: flex-start;
  width: 11.6rem;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  border-radius: 10px;
`;

const TextColorOptionWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  width: 9.6rem;
  padding: 0.6rem 1rem;

  border-radius: 6px;

  :hover {
    background-color: ${({ theme }) => theme.colors.gray20};
  }

  .is-active {
    color: ${({ theme }) => theme.colors.mainViolet};
  }
`;

const TextColorText = styled.p`
  color: ${({ theme }) => theme.colors.gray90};

  ${({ theme }) => theme.fonts.body7};
`;
