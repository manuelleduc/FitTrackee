# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# http://www.sphinx-doc.org/en/master/config

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
import sys
from pathlib import Path

import sphinx_bootstrap_theme

sys.path.insert(0, os.path.abspath('../../fittrackee'))


def setup(app):
    app.add_css_file("custom.css")


# -- Project information -----------------------------------------------------

project = 'FitTrackee'
copyright = '2018 - 2022, SamR1'
author = 'SamR1'

# The full version, including alpha/beta/rc tags.
release = (Path(__file__).parent.parent.parent / 'VERSION').read_text()
# The short X.Y version.
version = release.split('-')[0]


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'recommonmark',
    'sphinxcontrib.autohttp.flask'
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'bootstrap'
html_theme_path = sphinx_bootstrap_theme.get_html_theme_path()

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

html_theme_options = {
    'navbar_site_name': 'Docs',
    'bootswatch_theme': 'flatly',
    'navbar_links': [
        ('GitHub', 'https://github.com/SamR1/FitTrackee', True),
    ],
}


# -- Sources configuration ---------------------------------------------------

source_suffix = {
    '.rst': 'restructuredtext',
    '.txt': 'markdown',
    '.md': 'markdown',
}
