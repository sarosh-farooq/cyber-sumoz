import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './Character.module.css'
import Image from 'next/image'
import CharacterButton from '../Controls/CharacterButton'
import { Grid } from '@mui/material'
const collection = [
    {
        index: 1,
        src: '/Genesis/1.png',
        alt: '1'
    },
    {
        index: 2,
        src: '/Genesis/2.png',
        alt: '2'
    },
    {
        index: 3,
        src: '/Genesis/3.png',
        alt: '3'
    },
    {
        index: 4,
        src: '/Genesis/4.png',
        alt: '4'
    },

]

function Characters() {

    const [selected, setSelected] = useState(1);
    return (
        <Box>
            <Box className={styles.Characters}>
                <Box className={styles.Status}>
                    <Typography variant="body2" sx={{ color: 'white', fontSize: {xs: '10px', sm: '12px', md:'14px'} }}>USER function = [‘MAXI’]; absolute.............</Typography>
                </Box>
                <Box className={styles.CharacterBox1}>
                    <Box className={styles.CharacterBox}>
                        <Grid container spacing={2}>
                            <Grid item md={4} xs={0} sx={{display: {xs: 'none', md: 'block'}}}>
                                <Box className={styles.Ability}>
                                    <Box className={styles.Image}>
                                        <Image
                                            src="/Fight.png"
                                            alt="Ability"
                                            height={350}
                                            width={350}
                                            className={styles.ImageStyle}
                                        />
                                    </Box>
                                    <Box className={styles.AbilityDetail}>
                                        <Typography variant="subtitle1" sx={{ color: 'white' }}>Abilities Console</Typography>
                                        <Typography variant="body2" sx={{ color: 'white' }}>Analyze some of the various special attacks and celebratory emotes that can be performed in-game.</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid container item xs={12} md={8} className={styles.GridLines}>
                                <Grid item xs={12} sm={4}>
                                    <Box className={styles.CharacterList}>
                                        <Box className={styles.Collection} sx={{flexDirection: {xs: 'row', sm: 'column'}}}>
                                            {
                                                collection.map(collect =>
                                                    <Box key={collect.index} className={styles.CollectBox} sx={{ boxShadow: selected == collect.index ? '0px 0px 15px #01E1FF' : '' }} >
                                                        <Image
                                                            src={collect.src}
                                                            alt={collect.alt}
                                                            height={90}
                                                            width={90}
                                                            className={styles.Collect}
                                                            // layout='fixed'
                                                            onClick={() => setSelected(collect.index)}
                                                        />
                                                    </Box>

                                                )
                                            }
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box className={styles.SelectCharacter}>
                                        {/* <Box className={styles.Ring}></Box> */}
                                        {/* <Box className={styles.Ring2}></Box> */}
                                        <Box className={styles.SquareImage}>
                                            <Image
                                                src="/square.png"
                                                alt='1'
                                                height={50}
                                                width={50}

                                            />
                                        </Box>
                                        <Image
                                            src={`/GenesisT/${selected}.png`}
                                            alt='1'
                                            height={320}
                                            width={320}
                                            className={styles.selectedImage}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Box className={styles.Note}>
                <Typography variant="body2" sx={{ color: 'white' }} className={styles.NoteDetail}>NOTE: Each NFT character will be minted with one special attack and one celebratory emote. However, players can collect additional abilities by playing the game, and can even buy, resell and trade in the game’s player-owned economic ecosystem.</Typography>
            </Box>
        </Box>
    )
}

export default Characters